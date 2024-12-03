import React from 'react';
import Link from "next/link";

function MainLink({ href, linkText }) {
  return (
    <p className="text-xl text-right mb-8">
      <Link 
        href={href} 
        className="
          group 
          text-xl 
          text-teal-600 
          dark:text-teal-500
          hover:text-teal-700
          hover:bg-gray-200
          dark:hover:text-teal-400
          dark:hover:bg-gray-800 
          rounded-full 
          transition-all duration-200
          py-3 pl-5 pr-3">
        <span className="py-3"> {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition-all group-hover:translate-x-1 dark:group-hover:text-teal-400"><path d="m6 17 5-5-5-5" /></svg>
        </span>
      </Link>
    </p>
  )
}

export default MainLink