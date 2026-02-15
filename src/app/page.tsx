import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Content } from '../components/Content';

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full flex-col items-end overflow-auto bg-gray-50 dark:bg-gray-950">
        <Content />
        <Footer />
      </main>
    </>
  );
}
