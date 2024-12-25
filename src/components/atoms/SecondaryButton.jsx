import React from 'react';
import Link from "next/link";

export default function SecondaryButton({ href, linkText }) {
  return (
    <p className=''>
      <Link
        href={href}
        className="
        inline-block
        max-w-fit
        text-lg 
        font-bold 
        text-white 
        bg-teal-500 
        hover:bg-teal-600 
        px-2 py-3 my-5 
        rounded-sm 
        transition-colors 
        ease-in-out 
        duration-300">
        <span className="px-3 text-xl">{linkText}</span>
      </Link>
    </p>
  )
}
