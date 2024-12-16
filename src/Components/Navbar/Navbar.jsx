import React from "react";
import logo from "../../assets/logo.png";
import MobileMenu from "./MobileMenu.jsx";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <header className="w-full  py-1 top-0 sticky z-10 max-lg:static bg-white">
      <div className="h-full w-full flex justify-between items-center m-auto max-sm:!mr-4 sm:px-6">
        <div className="flex justify-between items-center max-lg:w-full max-lg:ml-2">
          <img src={logo} alt="Logo" className="max-h-16 max-lg:ml-2 " />
          <MobileMenu className="flex items-center justify-center " />
        </div>
        <div className="flex max-w-full">
          <ul className="flex items-center justify-center h-9 max-lg:hidden text-[#666] font-bold">
            <li className="m-3 cursor-pointer list-none text-base">Home</li>
            <li className="m-3 cursor-pointer list-none text-base">About</li>
            <li className="m-3 cursor-pointer list-none text-base">
              India updates
            </li>
            <li className="m-3 cursor-pointer list-none text-base">
              Opportunities
            </li>
            <li className="m-3 cursor-pointer list-none text-base">
              BioBiz Consulting
            </li>
            <li className="m-3 cursor-pointer list-none text-base">
              Innovation Insights
            </li>
            <NavDropdown title="Insights" id="nav-dropdown">
              <NavDropdown.Item>Bioenergy</NavDropdown.Item>
              <NavDropdown.Item>
                Environmental <br />
                Solutions
              </NavDropdown.Item>
              <NavDropdown.Item>Bio Products</NavDropdown.Item>
              <NavDropdown.Item>
                Bio-based Science & <br />
                Tech Pathways
              </NavDropdown.Item>
              <NavDropdown.Item>
                Regional Biomass <br />
                Residues
              </NavDropdown.Item>
              <NavDropdown.Item>
                India Biomass <br /> Residues
              </NavDropdown.Item>
              <NavDropdown.Item>Indian Bioeconomy</NavDropdown.Item>
            </NavDropdown>
            <li className="m-3 cursor-pointer list-none text-base">BRING</li>
            <li className="m-3 cursor-pointer list-none text-base">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
