import Link from "next/link";

export default function SecondaryButton({ href, linkText, alignment }) {
  return (
    <p className={alignment === "center" ? "text-center" : "text-left"}>
      <Link
        href={href}
        className="
        inline-block
        max-w-fit
        text-lg 
        font-normal 
        text-white 
        bg-proyecta-500 
        hover:bg-proyecta-600 
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
