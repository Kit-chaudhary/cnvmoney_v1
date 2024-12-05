"use client";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import React, { useEffect, useState } from "react";
import { FormsShow } from "./actions";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
const FormsList = () => {
  const [forms, setForms] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFormType, setSelectedFormType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formsPerPage] = useState(10);
  const [nfodata, setNfoData] = useState([]);
  const [formNfoData, setformNfoData] = useState([]);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FormsShow();
        if (response.status === 200) {
          setForms(response.formData);
          setformNfoData(response.nfoData);
        } else {
          setError(`Error: ${response.error}`);
        }
      } catch (error) {
        console.error(`Error fetching forms: ${error.message}`);
        setError(`Error: ${error.message}`);
      }
    };

    const fetchNfoData = async () => {
      try {
        const response = await fetch(
          "https://apis.cnvmoney.com/accord/nfo_details",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCORD_API_TOKEN}`,
            },
          }
        );
        const nfoData = await response.json();
        const filteredData = nfoData.filter((item) => item.opt_code !== 2);
        setNfoData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNfoData();
    fetchData();
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      setShowButton(window.innerWidth <= 768);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Filter and search logic for regular forms
  const filteredForms =
    selectedFormType === "All"
      ? forms
      : forms.filter((form) => form.formType === selectedFormType);

  const filteredAndSearchedForms = filteredForms.filter((form) =>
    form.amcName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter and search logic for NFO data
  const filteredAndSearchedNFO = nfodata.filter((nfo) =>
    nfo.s_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * formsPerPage;
  const indexOfFirstItem = indexOfLastItem - formsPerPage;
  const currentItems =
    selectedFormType === "NFO Form"
      ? filteredAndSearchedNFO.slice(indexOfFirstItem, indexOfLastItem)
      : filteredAndSearchedForms.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems =
    selectedFormType === "NFO Form"
      ? filteredAndSearchedNFO.length
      : filteredAndSearchedForms.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const highlightMatch = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(
      regex,
      (match, group) => `<span class="text-orange-500">${group}</span>`
    );
  };

  const filterButtons = [
    "All",
    "MF Form",
    "NFO Form",
    "CAMS Common Form",
    "Transaction Form",
    "Change of Broker",
    "KYC Form",
    "FD Form",
    "Bond Form",
  ];

  const renderNfoTable = () => {
    const filteredData = currentItems.map((fundData) => {
      const foundnfoData = formNfoData.find(
        (item) => parseInt(fundData.schemecode) === parseInt(item.amcName)
      );

      return {
        ...fundData,
        fileLink: foundnfoData ? foundnfoData.fileLink : -1,
      };
    });

    return (
      <table className="w-full border-collapse text-black">
        <thead>
          <tr>
            <th className="border p-2">Scheme Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">NFO Start</th>
            <th className="border p-2">NFO End</th>
            <th className="border p-2">Min Investment</th>
            <th className="border p-2">Form Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((nfo, index) => (
            <tr key={index}>
              <td className="border p-2">{nfo.LegalNames}</td>
              <td className="border p-2">{nfo.AMFIType}</td>
              <td className="border p-2">{formatDate(nfo.nfo_open)}</td>
              <td className="border p-2">{formatDate(nfo.nfo_close)}</td>
              <td className="border p-2">₹ {nfo.mininvt}</td>
              <td className="border p-2">
                {nfo.fileLink !== -1 ? (
                  <Link
                    href={nfo.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center">
                    <FaFilePdf className="mr-2" /> Open PDF
                  </Link>
                ) : (
                  "No file available"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderRegularTable = () => (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="border py-2 px-4 text-gray-500">File Name</th>
          <th className="border py-2 px-4 text-gray-500">File Type</th>
          <th className="border py-2 px-4 text-gray-500">File Link</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((form, index) => (
          <tr key={index}>
            <td
              className="border py-2 px-4 text-gray-500"
              dangerouslySetInnerHTML={{
                __html: highlightMatch(form.amcName, searchTerm),
              }}
            />
            <td className="border py-2 px-4 text-gray-500">{form.fileType}</td>
            <td className="border py-2 px-4">
              <Link
                href={form.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center">
                <FaFilePdf className="mr-2" /> Open PDF
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="pt-24 px-5 flex flex-col items-center bg-gray-100 min-h-screen text-sm">
      <div>
        <div className="mb-4 flex justify-between flex-wrap mt-4">
          <h2 className="font-bold mb-4 text-xl download_tag p-2">
            {selectedFormType === "NFO Form" ? "NFO Details" : "Download Forms"}
          </h2>

          <label className="input input-bordered flex items-center gap-2 shadow-xl search_input p-2">
            <input
              type="text"
              className="grow text-base"
              placeholder={
                selectedFormType === "NFO Form"
                  ? "Search by Scheme Name"
                  : "Search by File Name"
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="flex mb-4 flex-wrap">
          {windowWidth > 768 &&
            filterButtons.map((formType) => (
              <button
                key={formType}
                onClick={() => {
                  setSelectedFormType(formType);
                  setCurrentPage(1);
                  setSearchTerm("");
                }}
                className={`px-4 py-2 m-2 btn_default_color shadow-xl text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                  selectedFormType === formType ? "btn_active_color" : ""
                }`}>
                {formType}
              </button>
            ))}
          {showButton && (
            <button
              className={`px-4 py-2 m-2 flex justify-between items-center btn_default_color shadow-xl text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                isToggled ? "btn_active_color" : ""
              }`}
              onClick={handleToggle}>
              <HiAdjustmentsVertical />
              &nbsp;
              <label>filter</label>
            </button>
          )}
        </div>
        {windowWidth < 768 && isToggled && (
          <div className="flex mb-4 flex-wrap">
            {filterButtons.map((formType) => (
              <button
                key={formType}
                onClick={() => {
                  setSelectedFormType(formType);
                  setCurrentPage(1);
                  setSearchTerm("");
                }}
                className={`px-4 py-2 m-2 btn_default_color shadow-xl text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                  selectedFormType === formType ? "btn_active_color" : ""
                }`}>
                {formType}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-full overflow-x-auto bg-white bg-opacity-90 rounded-md p-6 shadow-lg mb-8">
        {currentItems.length === 0 && !error && (
          <div className="text-gray-500">No data available.</div>
        )}

        {error && <div className="text-red-500">{error}</div>}

        {currentItems.length > 0 && (
          <>
            {selectedFormType === "NFO Form"
              ? renderNfoTable()
              : renderRegularTable()}

            <ul className="flex justify-center flex-wrap mt-4">
              {Array.from(
                { length: Math.ceil(totalItems / formsPerPage) },
                (_, i) => (
                  <li
                    key={i}
                    className={`mx-1 px-3 py-1 cursor-pointer mb-1 ${
                      currentPage === i + 1
                        ? "bg-gray-400 text-black"
                        : "bg-gray-100 text-gray-500"
                    }`}
                    onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </li>
                )
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default FormsList;

export const formatDate = (dateString) => {
  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  // Create a new Date object
  const date = new Date(year, month, day);

  // Format the date as 'DD MMM YYYY' (e.g., 29 Oct 2024)
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
