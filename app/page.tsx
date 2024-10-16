import Features from './_components/Features';
import Header from './_components/Header';
import Hero from './_components/Hero';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='flex-1'>
        <Hero />
        <Features />
      </main>
    </div>
  );
};
export default HomePage;
