import { ReactNode } from 'react'

interface LinkIconProps {
  children: ReactNode
  href: string
}

export function LinkIcons({ children, href }: LinkIconProps) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF8A56]">
      <a
        href={href}
        target={'_blank'}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-blackPrimary shadow-lg"
      >
        {children}
      </a>
    </div>
  )
}
