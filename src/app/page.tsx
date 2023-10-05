import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MainProjects } from './components/MainProjects'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-950">
      <Hero />
      <MainProjects />
      <Footer />
    </main>
  )
}
