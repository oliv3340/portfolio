"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useTranslations } from 'next-intl';

import SideBar from "./SideBar";
import NavItem from "./NavItem";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sticky bg-white top-0 z-40 h-20">
        <div className="container mx-auto h-full">
          <SideBar isOpen={isOpen} toggle={toggle} />
          <div className="flex h-full justify-between items-center mx-10 lg:mx-0">
            <Logo />
            <div className="flex items-center align-center">
              <ul className="invisble md:visible hidden md:flex gap-x-6 uppercase text-xs tracking-widest">
                <NavItem />
              </ul>
              <div className="container mx-auto h-full">
                <div className="h-full invisible md:visible">
                  <LanguageSelector />
                </div>
              </div>
              <div className="md:invisible" onClick={toggle} >
                <FaBars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
