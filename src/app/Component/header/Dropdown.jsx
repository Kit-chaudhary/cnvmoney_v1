import React from "react";
import Link from "next/link";

const Dropdown = ({ name, dropdownItems }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div
      className="dropdown dropdown-hover relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <label tabIndex={0} className="cursor-pointer">
        {name}
      </label>
      <ul
        className={`dropdown-content z-10 menu p-2 bg-white text-black shadow  rounded-box w-52 absolute ${
          showDropdown ? "block" : "hidden"
        }`}
      >
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>
              <p className="text-base">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
