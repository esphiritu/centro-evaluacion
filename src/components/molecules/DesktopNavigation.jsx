import Link from "next/link"


export default function DesktopNavigation({ links }) {
  return (
    <nav className="hidden md:block desktop-nav">
      <ul className="flex w-auto md:min-h-fit md:bg-transparent md:dark:bg-transparent md:py-4 min-h-screen bg-slate-200  dark:bg-slate-600 py-10 pr-10">
            {links.map((link) => (
              <li key={link.href} className="px-4">
                <Link 
                  className="text-2xl md:text-lg font-semibold"
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