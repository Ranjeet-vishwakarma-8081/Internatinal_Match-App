// import React from 'react'
import {
  RiHome4Fill,
  RiGameFill,
  RiSettings3Line,
  RiMoneyRupeeCircleLine,
} from "react-icons/ri";
// className=" text-4xl w-full py-2 text-white "
const BottomNavigationBar = () => {
  return (
    <div className="text-3xl w-full py-2 bg-gray-800 border-t-2 border-gray-700 text-white">
      <ul className="flex justify-around">
        <li className="flex flex-col justify-center items-center hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
          <RiHome4Fill />
          <span className="text-xs">Home</span>
        </li>
        <li className="flex flex-col justify-center items-center hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
          <RiGameFill />
          <span className="text-xs">Games</span>
        </li>
        <li className="flex flex-col justify-center items-center hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
          <RiSettings3Line />
          <span className="text-xs">Setting</span>
        </li>
        <li className="flex flex-col justify-center items-center hover:bg-gray-700 py-1 px-2 rounded-md transition-colors duration-300 cursor-pointer">
          <RiMoneyRupeeCircleLine />
          <span className="text-xs">Coin</span>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigationBar;
