export function MainProjects() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center">
      <h1 className="my-8 text-xl font-bold text-gray-500 md:mb-4 md:text-2xl">
        Main Projects
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 rounded-md bg-gradient-to-r from-[#B16CEA] to-[#FF8A56] px-4 py-8 md:flex-row">
        <a
          href="https://github.com/lfeliperibeiro/ribeiro-ui"
          target="_blank"
          className="font-bold text-gray-100 hover:text-gray-700 sm:text-xs md:text-lg"
        >
          Ribeiro-UI
        </a>
        <div className="h-0.5 w-full bg-slate-600 md:h-full md:w-0.5" />
        <a
          href="https://github.com/lfeliperibeiro/eslint-config-felipe-ribeiro"
          target="_blank"
          className="font-bold text-gray-100 hover:text-gray-700 sm:text-xs md:text-lg"
        >
          Ribeiro-Eslint-Config
        </a>
        <div className="h-0.5 w-full bg-slate-600 md:h-full md:w-0.5" />
        <a
          href="https://github.com/lfeliperibeiro/chat-ai sm:text-xs md:text-lg"
          target="_blank"
          className="font-bold text-gray-100 hover:text-gray-700 sm:text-xs md:text-lg"
        >
          Ribeiro-Chat-AI
        </a>
      </div>
    </div>
  )
}
