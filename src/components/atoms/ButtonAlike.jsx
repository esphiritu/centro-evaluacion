
export default function ButtonAlike({  ButtonText, iconButton  }) {
  return (
      <span
        className="
        group
        flex
        justify-between
        items-center
        max-w-fit
        text-lg 
        font-bold 
        text-white 
        bg-teal-500 
        hover:bg-teal-600 
        pl-3 pr-5 py-3 
        rounded-sm 
        transition-colors 
        ease-in-out 
        duration-300">
        <span className="px-3 text-xl">{ButtonText}</span>
        {iconButton ?? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 origin-left inline transition-all group-hover:translate-x-1 dark:group-hover:text-teal-400"><path d="m6 17 5-5-5-5" /></svg>}
      </span>
    
  )
}
