import React from 'react';
import Link from "next/link";


export default function SecondaryLink({ href, linkText }) {
  return (
    <p className="text-xl">
      <Link 
        href={href} 
        className="
          group 
          text-xl 
          text-teal-500 
          hover:text-teal-600
          transition-all duration-200 
          py-3 pl-1 pr-3">
        <span className="py-3"> {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition-all group-hover:translate-x-1 group-hover:text-teal-700"><path d="m6 17 5-5-5-5" /></svg>
        </span>
      </Link>
    </p>
  )
};
