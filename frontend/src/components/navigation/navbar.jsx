import React from "react";
import { BiLogOut } from "react-icons/bi";
import MenuItems from '../../../data/MenuItems'

const Navbar = ({ active, setActive }) => {
  return (
    <div className="bg-[#272953] flex flex-col justify-between gap-3 px-[2rem] py-[1.5rem] w-[350px] h-[100vh border-[#FFFFF] rounded-xl">
      <div className="flex flex-row gap-5 mb-10">
        <img
          src="https://i.pravatar.cc/150?u=bachu"
          className="rounded-[100%] w-[40%] border-2 border-gray-300 shadow-md shadow-gray-500"
        />
        <div className="flex flex-col gap-1 justify-center">
          <h2 className="text-xl text-white font-bold">Lorenzo</h2>
          <span className="text-sm text-gray-300">Your money</span>
        </div>
      </div>
      <ul className="flex flex-col gap-12 ">
        {
          MenuItems.map((item) => {
            return(
              <li onClick={() => setActive(item.id)} key={item.id} className="flex flex-row gap-3 p-2 place-items-center font-bold text-white hover:border-l-2 hover:border-[#EBD8E9] hover:text-gray-400 cursor-pointer">
                {item.icon}
                <span className="hover:font-extrabold">{item.title}</span>
              </li>
            )
          })
        }
      </ul>
      <div className="flex mt-[20%]">
        <li className="flex flex-row gap-2 place-items-center font-bold text-white hover:border-l-2 hover:border-[#EBD8E5] hover:text-gray-400  cursor-pointer">
          <BiLogOut />
          <span className="hover:font-extrabold">Log out</span>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
