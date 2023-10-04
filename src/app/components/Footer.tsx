import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { LinkIcons } from './LinkIcons'

export function Footer() {
  const date = new Date()
  return (
    <footer className="flex w-full items-center justify-between border-t border-zinc-50/40 px-48 py-4">
      <div className="flex w-full items-center justify-between  py-4">
        <p className="text-sm font-thin text-whiteSecondary">
          ©{date.getFullYear()}, Felipe Ribeiro
        </p>
        <div className="flex items-center gap-4">
          <LinkIcons href="https://www.instagram.com/lfelipe.ribeiro/">
            <Instagram className="h-4 w-4  text-whitePrimary " />
          </LinkIcons>
          <LinkIcons href="https://www.linkedin.com/in/lfeliperibeiro/">
            <Linkedin className="h-4 w-4 text-whitePrimary" />
          </LinkIcons>

          <LinkIcons href="https://twitter.com/Lfelipe_rib">
            <Twitter className="h-4 w-4 text-whitePrimary " />
          </LinkIcons>
        </div>
      </div>
    </footer>
  )
}
