import { navigationItem } from '@/data/navigation';
import Nav from './Nav';
import Nav2 from './Nav2';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className='inner flex flex-col md:flex-row justify-between bg-primary md:bg-secondary lg:bg-gray-900'>
        <h1>
          <Link href='/' className='h-16 flex items-center'>
            logo
          </Link>
        </h1>
        <Nav2 nav={navigationItem} />
        {/* nav라는 이름으로 navigationItem 배열을 전달 */}
      </div>
    </header>
  );
}

export default Header;
