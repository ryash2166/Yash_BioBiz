import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when clicking a menu item
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-flex w-full justify-end  lg:!hidden max-lg:mt-0"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="bg-white px-4 my-auto focus:outline-none "
      >
        <RxHamburgerMenu className="h-8 w-8 max-lg:h-6 max-lg:w-6 text-[#2EA3F2]" />
      </button>

      {isOpen && (
        <ul className="absolute right-[70px] p-[5%] mt-[13px] bg-white text-[#666] w-full top-9 shadow-lg z-10 overflow-y-auto border-t-[3px]   border-[#2ea3f2]">
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Home
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            About
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            India updates
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Opportunities
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            BioBiz Consulting
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Innovation Insights
          </li>
          <li
            className="cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <span className="bg-[#00000008] block px-[5%] py-[10px]">Insights</span>
            <ul className="pl-[10px] ">
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">Bioenergy</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">Enivronmental Solutions</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">Bio Products</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">Bio-based Science & Tech Pathways</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">Regional Biomass Residues</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">India Biomass Residues</p>
                </li>
                <li className="pl-[5%]">
                    <p className="px-[5%] py-[10px] border-b-[1px] ">India Bioeconomy</p>
                </li>
            </ul>
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            BRING
          </li>
          <li
            className="border-b-[1px] px-[5%] py-[10px]  cursor-pointer"
            onClick={handleMenuItemClick}
          >
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
