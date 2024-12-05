import React from 'react';
import Link from "next/link";

function OutlineButton({ href, linkText }) {
  return (
    <p className="text-xl text-right mb-8">
      <Link 
        href={href} 
        className="
          group 
          text-xl 
          text-teal-600 
          dark:text-teal-500
          hover:text-white
          hover:bg-teal-600
          dark:hover:text-white
          dark:hover:bg-teal-500 
          rounded-full 
          transition-all duration-300
          py-3 pl-5 pr-3">
        <span className="py-3"> {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition-all group-hover:translate-x-1 dark:group-hover:text-white"><path d="m6 17 5-5-5-5" /></svg>
        </span>
      </Link>
    </p>
  )
}

export default OutlineButton