import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
              Decentralized Avalanche Exchange
            </h1>
            <p className='text-gray-200 md:text-xl'>
              Send AVAX tokens securely and efficiently on the Avalanche
              network.
            </p>
          </div>
          <Button className='text-red-500 hover:text-red-400 text-lg'>
            Use AvaSwap
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
