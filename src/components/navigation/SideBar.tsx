import React from "react";
import { FaTimes } from "react-icons/fa";

import NavItem from "./NavItem";
import LanguageSelector from "./LanguageSelector";

export default function SideBar({ ...props }) {
  if (props.isOpen) {
    return (
      <div className=" bg-white z-40 top-0 absolute h-full w-full">
        <div className="text-3xl p-5 absolute" style={{ "right": "32px" }}>
          <FaTimes onClick={props.toggle} />
        </div>
        <div className="flex flex-col min-h-screen justify-evenly items-center bg-white">
          <div className="text-center">
            <ul className="uppercase tracking-widest">
              <NavItem {...props} />
              <div className="container mx-auto h-full">
                <div className="flex flex-col items-center h-full visible md:invisible">
                  <LanguageSelector />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div >
    );
  }

  return (
    <>
    </>
  );
}

