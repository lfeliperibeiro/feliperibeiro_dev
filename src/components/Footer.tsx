export function Footer() {
  return (
    <footer
      className="flex w-full  items-center justify-center px-2 py-4"
      data-testid="footer"
    >
      <div className="flex w-full items-center justify-center  py-4">
        <div className="flex items-center gap-2 md:gap-8">
          <a
            href="https://github.com/lfeliperibeiro"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-50"
          >
            github
          </a>
          <a
            href="https://www.instagram.com/lfelipe.ribeiro/"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-50"
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/in/lfeliperibeiro/"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-50"
          >
            linkedin
          </a>

          <a
            href="https://twitter.com/Lfelipe_rib"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-50"
          >
            twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
