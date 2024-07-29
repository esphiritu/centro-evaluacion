import Link from "next/link";


export default function DesktopNavigation({ links }) {
  return (
    <nav className="hidden md:block desktop-nav">
      <ul 
          className="
          flex 
          w-auto 
          md:min-h-fit 
          md:bg-transparent 
          md:dark:bg-transparent 
          md:py-4 
          min-h-screen 
          pr-10
          py-10 
          bg-slate-200  
          dark:bg-slate-600">
            {links.map((link) => (
              <li key={link.href} className="px-1">
                <Link 
                  className="
                  px-3 
                  py-2 
                  text-2xl 
                  md:text-lg 
                  text-gray-700 
                  hover:text-teal-700
                  dark:text-gray-400
                  dark:hover:text-teal-700
                  font-semibold 
                  rounded-md 
                  white 
                  bg-transparent 
                  transition-all 
                  duration-300 
                  ease-in-out"
                  href={link.href} 
                  alt={link.alt}>
                    {link.text}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
}