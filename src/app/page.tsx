'use client'

import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'))
  }

  return (
    <main className="flex h-screen w-full flex-col items-end overflow-auto bg-gray-950">
      <div>
        <button
          className="p-4 text-slate-400 hover:text-slate-200"
          onClick={toggleLanguage}
        >
          {language === 'en' ? 'Portuguese' : 'English'}
        </button>
      </div>

      <Hero language={language} setLanguage={setLanguage} />
      <Footer />
    </main>
  )
}
