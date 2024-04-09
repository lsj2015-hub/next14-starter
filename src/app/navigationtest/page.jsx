'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');
  const sort = searchParams.get('sort');
  const price = searchParams.get('price');

  // console.log('pathname => ', pathname);
  // console.log('query1 => ', q);
  // console.log('query2 => ', sort);
  // console.log('query3 => ', price);

  const handleClick = () => {
    console.log('clicked');
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
