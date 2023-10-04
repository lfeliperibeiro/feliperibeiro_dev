export function MainProjects() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center ">
      <h1 className="mb-4 text-2xl font-bold text-gray-500">Main Projects</h1>
      <div className="flex items-center justify-center gap-4 rounded-md bg-gradient-to-r from-[#B16CEA] to-[#FF8A56] px-4 py-8">
        <a
          href="https://github.com/lfeliperibeiro/ribeiro-ui"
          target="_blank"
          className=" text-lg font-bold text-gray-100 hover:text-gray-700"
        >
          Ribeiro-UI
        </a>
        <div className="h-full w-0.5 bg-slate-600" />
        <a
          href="https://github.com/lfeliperibeiro/eslint-config-felipe-ribeiro"
          target="_blank"
          className=" text-lg font-bold text-gray-100 hover:text-gray-700"
        >
          Ribeiro-Eslint-Config
        </a>
        <div className="h-full w-0.5 bg-slate-600" />
        <a
          href="https://github.com/lfeliperibeiro/chat-ai"
          target="_blank"
          className=" text-lg font-bold text-gray-100 hover:text-gray-700"
        >
          Ribeiro-Chat-AI
        </a>
      </div>
    </div>
  )
}
