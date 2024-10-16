import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg'>
      <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
      <Boxes />
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900'>
        <div className='px-4 md:px-6'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-4 z-30'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
                Decentralized Avalanche Exchange
              </h1>
              <p className='text-gray-200 md:text-xl'>
                Send AVAX tokens securely and efficiently on the Avalanche
                network.
              </p>
              <Link href='/swap'>
                <Button className='text-red-500 hover:text-red-400 text-lg mt-4'>
                  Use AvaSwap
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
