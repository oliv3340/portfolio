import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="font-title antialiased text-xl md:text-3xl">
        <Link href="/">
          Olivier Graciannette
        </Link>
      </div >
    </>
  )
}
