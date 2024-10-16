import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-t-gray-800'>
      <p className='text-xs text-gray-500 dark:text-gray-400'>
        © {new Date().getFullYear()} AvaSwap. All rights reserved.
      </p>
      <nav className='sm:ml-auto text-sm flex gap-4 sm:gap-6'>
        <Link href='/swap'>Swap Now</Link>
      </nav>
    </footer>
  );
};
export default Footer;
