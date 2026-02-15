'use client';

import { Link } from 'react-aria-components';

export function Footer() {
  return (
    <footer
      className="flex w-full items-center justify-center border-t border-gray-200 px-2 py-4 dark:border-zinc-800"
      data-testid="footer"
    >
      <div className="flex w-full items-center justify-center py-4">
        <nav className="flex items-center gap-2 md:gap-8" aria-label="Redes sociais">
          <Link
            href="https://github.com/lfeliperibeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950 dark:focus:text-zinc-50"
          >
            github
          </Link>
          <Link
            href="https://www.instagram.com/lfelipe.ribeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950 dark:focus:text-zinc-50"
          >
            instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/lfeliperibeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950 dark:focus:text-zinc-50"
          >
            linkedin
          </Link>
          <Link
            href="https://twitter.com/Lfelipe_rib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950 dark:focus:text-zinc-50"
          >
            twitter
          </Link>
        </nav>
      </div>
    </footer>
  );
}
