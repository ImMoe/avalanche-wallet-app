import { ArrowRightLeft } from 'lucide-react';

const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center'>
      <a className='flex items-center justify-center' href='#'>
        <ArrowRightLeft className='h-6 w-6 text-primary' />
        <span className='ml-2 text-2xl font-bold text-primary'>AvaSwap</span>
      </a>
    </header>
  );
};
export default Header;
