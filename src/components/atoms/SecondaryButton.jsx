import React from 'react';
import Link from "next/link";

export default function SecondaryButton({ href, linkText }) {
  return (
    <Link
      href={href}
      className="
      max-w-min
      text-lg 
      font-bold 
      text-white 
      bg-teal-500 
      hover:bg-teal-600 
      px-3 py-4 my-5 
      rounded-sm 
      transition-colors 
      ease-in-out 
      duration-300">
      <span className="px-3 text-xl">{linkText}</span>
    </Link>
  )
}
