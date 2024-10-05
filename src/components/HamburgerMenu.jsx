import { useState } from "react";
import { RiMenuLine, RiCloseLargeFill, RiSearchLine } from "react-icons/ri";
import propTypes from "prop-types";

const HamburgerMenu = ({ searchResult, setSearchResult }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchbarActive, setSearchbarActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearchbar = () => {
    setSearchbarActive(!isSearchbarActive);
  };
  return (
    <>
      <div className=" flex justify-center items-center space-x-2 ">
        {/* SearchBar */}
        {isSearchbarActive ? (
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
              className="border bg-transparent rounded-md  pl-12 w-32 p-1"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <RiSearchLine className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        ) : (
          <button onClick={toggleSearchbar}>
            <RiSearchLine className="w-6 h-6" />
          </button>
        )}

        {/* Hamburger Menu */}
        <div className="relative border rounded-md flex items-center p-1">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <RiCloseLargeFill className="w-6 h-6" />
            ) : (
              <RiMenuLine className="w-6 h-6" />
            )}
          </button>
          {/* content of the menu */}
          <div className="absolute bottom-0 -right-[17px] top-10 ">
            {isOpen && (
              <ul className="border border-gray-700 bg-gray-800  px-4 py-3 space-y-2 rounded-md ">
                <li className="hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
                  Home
                </li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
                  Games
                </li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
                  Setting
                </li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
                  Coin
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  searchResult: propTypes.string,
  setSearchResult: propTypes.func,
};

export default HamburgerMenu;
