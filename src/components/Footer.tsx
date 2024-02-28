import React from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import HrSeparator from "./HrSeparator";

const MENU_ITEMS = [
  { text: "LinkedIn", href: "https://www.linkedin.com/in/olivier-graciannette-3358b89b/", icon: <GrLinkedin /> },
  { text: "Github", href: "https://github.com/oliv3340", icon: <FaGithub /> },
  { text: "Email", href: "mailto:olivier.graciannette@gmail.com", icon: <MdAlternateEmail /> },
  { text: "Twitter", href: "https://twitter.com/Oliv3340", icon: <GrTwitter /> },
]

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <>
      <div className="flex bg-oliv min-w-screen h-64" id="contact">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <div className="title text-3xl md:text-5xl">
            {t('title')}
          </div>
          <HrSeparator />
          <div className="container">
            <div className="flex h-full w-full justify-center items-center gap-x-4 md:gap-x-6">
              {MENU_ITEMS.map((menu) => (
                <Link className="flex items-center hover:text-hover" href={menu.href} key={menu.text}>
                  {menu.icon}
                  <div className="ms-2">{menu.text}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
