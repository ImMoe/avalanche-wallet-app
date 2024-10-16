import Features from './_components/Features';
import Footer from './_components/Footer';
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
      <Footer />
    </div>
  );
};
export default HomePage;
