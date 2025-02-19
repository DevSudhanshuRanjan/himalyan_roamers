import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <div className="bg-[#184E77] flex justify-between items-center px-4 py-2 mb-0.5">
      <Link to="/">
        <h1 className="text-[#F4F9F4] text-2xl sm:text-3xl font-bold font-[Montserrat] hover:text-[#A7C957]">
          Himalayan Roamers
        </h1>
      </Link>

      <Menu as="div" className="relative">
        <div>
          <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 hover:bg-gray-50">
            Latest Tour
            <ChevronDownIcon className="-mr-1 size-5 text-gray-400" />
          </MenuButton>
        </div>

        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
          <MenuItems className="py-1">
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/Rishikesh"
                  className={`block px-4 py-2 text-sm text-gray-700 ${active ? "bg-gray-100 text-gray-900" : ""}`}
                >
                  Rishikesh
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/Chakrata"
                  className={`block px-4 py-2 text-sm text-gray-700 ${active ? "bg-gray-100 text-gray-900" : ""}`}
                >
                  Chakrata
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/Landour"
                  className={`block px-4 py-2 text-sm text-gray-700 ${active ? "bg-gray-100 text-gray-900" : ""}`}
                >
                  Landour
                </Link>
              )}
            </MenuItem>
          </MenuItems>
          
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
