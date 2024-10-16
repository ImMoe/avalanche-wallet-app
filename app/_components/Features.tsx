import { ArrowRightLeft, Lock, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-gray-900'>
      <div className='px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
          Features
        </h2>
        <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <ArrowRightLeft className='h-10 w-10 text-primary text-red-400' />
            <h3 className='text-xl font-bold'>Instant Swaps</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Lightning-fast token exchanges on the Avalanche network.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <Lock className='h-10 w-10 text-primary text-red-400' />
            <h3 className='text-xl font-bold'>Secure Transactions</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Advanced security measures to protect your assets.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <Zap className='h-10 w-10 text-primary text-red-400' />
            <h3 className='text-xl font-bold'>Low Fees</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Competitive rates for all your AVAX token swaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
