'use client';

import { Heading } from 'react-aria-components';
import { Bio } from './Bio';
import { Resume } from './Resume';
import { Career } from './Career';

export function Content() {
  return (
    <>
      <section
        className="mt-4 flex w-full flex-1 flex-col items-center justify-center text-gray-900 dark:text-zinc-100"
        data-testid="content"
      >
        <div className="w-full max-w-2xl pl-20">
          <Heading
            level={1}
            className="mb-4 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-4xl text-transparent"
          >
            Inspired. UX. Idea
          </Heading>
          <div className="gap-6 sm:flex">
            <Resume />
          </div>
        </div>

        <Bio />
        <Career />
      </section>
    </>
  );
}
