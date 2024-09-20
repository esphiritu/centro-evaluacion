import React from 'react';
import Link from "next/link";

export default function MainButton({ href, linkText }) {
  return (
    <Link 
      href={href}
      className="
      group 
      transition-all 
      duration-300
      ease-in-out 
      text-center 
      bg-yellow-300
      hover:bg-yellow-500 
      py-3 pl-9 pr-3 
      rounded-sm 
      text-gray-800 
      font-bold 
      md:text-xl 
      shadow-md 
      mt-1 md:mt-6">
      {linkText}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          lucide 
          lucide-chevron-right 
          ml-1 
          origin-left 
          inline 
          text-transparent 
          hover:translate-x-0.3 
          transition-all 
          group-hover:translate-x-2 
          group-hover:text-gray-800"><path d="m6 17 5-5-5-5" /></svg>
    </Link>
  )
}
