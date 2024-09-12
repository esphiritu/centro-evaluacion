import React from 'react';
import Link from "next/link";

function OutlineButton({ href, linkText }) {
  return (
    <Link 
      href={href} 
      className="
        text-lg 
        outline 
        text-teal-600 
        hover:bg-teal-600 
        hover:text-white 
        transition-colors 
        ease-in-out 
        duration-300 
        px-3 py-3 
        rounded-sm 
        ml-1 mt-8
        inline-block">
      <span className="py-2 px-3 text-xl">{linkText}</span>
    </Link>
  )
}

export default OutlineButton