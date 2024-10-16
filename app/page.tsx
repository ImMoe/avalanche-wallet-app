import Features from './_components/Features';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Instructions from './_components/Instructions';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='flex-1'>
        <Hero />
        <Features />
        <Instructions />
      </main>
    </div>
  );
};
export default HomePage;
