import React from 'react';
import Link from "next/link";


export default function SecondaryLink({ href, linkText }) {
  return (
    <p className="text-xl">
      <Link 
        href={href} 
        className="
          group
          text-teal-600 
          hover:text-teal-700
          dark:hover:text-teal-400
          transition-all duration-200 
          py-3 pl-1 pr-3">
        <span className="py-3"> 
          {linkText}
        </span>
      </Link>
    </p>
  )
};
