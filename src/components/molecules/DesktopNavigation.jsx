import Link from "next/link"


export default function DesktopNavigation({ links }) {
  return (
    <nav className="hidden md:block desktop-nav">
      <ul className="flex w-auto md:min-h-fit md:bg-transparent md:dark:bg-transparent md:py-4 min-h-screen bg-slate-200  dark:bg-slate-600 py-10 pr-10">
            {links.map((link) => (
              <li key={link.href} className="px-1">
                <Link 
                  className="px-3 py-2 text-2xl md:text-lg  text-slate-700 hover:text-slate-950 rounded-md hover:bg-slate-100 bg-transparent transition-all duration-300 ease-in-out"
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