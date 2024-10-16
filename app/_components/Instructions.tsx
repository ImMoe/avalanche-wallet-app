const Instructions = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
          How It Works
        </h2>
        <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
              1
            </div>
            <h3 className='text-xl font-bold'>Connect Wallet</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Link your Avalanche-compatible wallet to get started.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
              2
            </div>
            <h3 className='text-xl font-bold'>Enter address</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Choose the AVAX recipient you want to swap or send to.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
              3
            </div>
            <h3 className='text-xl font-bold'>Confirm & Send</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Review the transaction details and confirm to complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Instructions;
