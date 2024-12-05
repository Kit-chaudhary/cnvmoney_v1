"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  FormEvent,
} from "react";
import Navbar from "@/app/Component/header/Navbar";
import Footer from "@/app/Component/Footer/Footer";
import { ContentShow } from "./actions";
import Preloader from "@/app/Component/Preloader/Preloader";
import Image from "next/image";
import axios from "axios";

interface UserContextType {
  content: any[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => useContext(UserContext);

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  const [content, setContent] = useState<any[]>([]);
  const [logo, setLogo] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false); //beta

  //beta
  const [formData, setFormData] = useState({
    fullname: "",
    pan: "",
    mobile: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateIndianMobileNumber = (number: any) => {
    const regex = /^[7-9][0-9]{9}$/;
    return regex.test(number);
  };

  const validatePAN = (pan: any) => {
    const panRegex = /^[A-Z]{3}P[A-Z][0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const isValidData =
    formData.fullname.length > 5 &&
    validateIndianMobileNumber(formData.mobile) &&
    validateEmail(formData.email) &&
    validatePAN(formData.pan);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContentShow();
        if (response.status === 200) {
          if (Array.isArray(response.data)) {
            setContent(response.data);
            if (response.data.length > 0 && "logoFirst" in response.data[0]) {
              setLogo(response.data[0].logoFirst);
            }
          } else {
            console.error("Invalid response format:", response.data);
          }
        }
      } catch (error: any) {
        console.error(`Error fetching Content: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  if (content.length === 0) {
    return <Preloader />;
  }

  const handleOpenModal = () => {
    setOpen((prev) => !prev);
    console.log("From App", open);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await axios.post("/api/betaContact", { formData });

    setFormData({ fullname: "", pan: "", mobile: "", email: "" });
    setOpen(false);
  };

  return (
    <UserContext.Provider value={{ content }}>
      <div>
        <div className="Navbar-sec">
          <div className="z-0">
            <Navbar
              value={logo}
              openModel={open}
              handelOpenModel={handleOpenModal}
            />
          </div>
        </div>
      </div>
      {children}
      <div className="Footer">
        <Footer value={content} />
      </div>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 text-[#0161ff] bg-gray-800 bg-opacity-50"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div
            className="modal-box bg-white p-6 rounded shadow-lg max-w-md w-full mx-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <h3 className="font-bold text-lg">Registration For Beta Version</h3>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
                <input
                  type="text"
                  className="input input-bordered w-full md:w-full"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Enter fullname"
                />
                {formData.fullname.length > 5 ? (
                  <Image
                    src="/green-tick.png"
                    width={20}
                    height={20}
                    alt="green-tick"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition delay-100"
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
                <input
                  type="text"
                  className="input input-bordered w-full md:w-full"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  placeholder="Enter Pan"
                />
                {validatePAN(formData.pan) && (
                  <Image
                    src="/green-tick.png"
                    width={20}
                    height={20}
                    alt="green-tick"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition delay-100"
                  />
                )}
              </div>

              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
                <input
                  type="text"
                  className="input input-bordered w-full md:w-full"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter Mobile"
                />
                {validateIndianMobileNumber(formData.mobile) && (
                  <Image
                    src="/green-tick.png"
                    width={20}
                    height={20}
                    alt="green-tick"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition delay-100"
                  />
                )}
              </div>

              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between relative">
                <input
                  type="email"
                  className="input input-bordered w-full md:w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />
                {validateEmail(formData.email) && (
                  <Image
                    src="/green-tick.png"
                    width={20}
                    height={20}
                    alt="green-tick"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition delay-100"
                  />
                )}
              </div>

              <div className="modal-action mt-4 flex justify-end">
                {isValidData === true ? (
                  <button
                    className="btn bg-[#e6eefe] text-[#0161ff]"
                    type="submit"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn bg-[#e6eefe] text-[#0161ff]"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </UserContext.Provider>
  );
}
