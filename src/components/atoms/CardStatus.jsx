
export default function CardStatus({ status }) {
  return (
    <>
      {(() => {
        switch (status) {
          case "recomendado":
            return (
              <div className="w-fit mb-5 mt-5 bg-amber-300 dark:bg-amber-200 rounded-md">
                <p className="text-sm font-bold text-yellow-600 px-3 pt-1 tracking-wide uppercase leading-loose">recomendado</p>
              </div>
            );
          case "nuevo":
            return (
              <div className="w-fit mb-5 mt-5 bg-green-300 dark:bg-green-200 rounded-md">
                <p className="text-sm font-bold text-green-600 px-3 pt-1 tracking-wide uppercase leading-loose">nuevo</p>
              </div>
            );
          case "alerta":
            return (
              <div className="relative w-fit mb-5 ml-6 mt-5 bg-white rounded-full pl-7 pr-4 py-1">
                <span className="absolute left-4 top-[0.84rem] w-1 h-1 bg-red-500 rounded-full px-1 py-1">
                </span>
                <span className="absolute left-4 top-[0.84rem] w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full animate-ping duration-800 ease-in">
                </span>
                <p className="leading-snug text-slate-700 dark:text-slate-400 px-1 py-1 font-bold">Quedan pocos lugares</p>
              </div>
            );
          case "cerrado":
            return (
              <div className="w-fit mb-5 mt-5 bg-gray-300/70 dark:bg-gray-200 rounded-md">
                <p className="text-sm font-bold text-gray-600 px-3 pt-1 tracking-wide uppercase leading-loose">cerrado</p>
              </div>
            );
          default:
            return <div></div>;
        }
      })()}
    </>
  );
}