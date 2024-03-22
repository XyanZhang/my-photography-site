import Link from 'next/link';

const Nav = () => {
  return (
    <ul className='flex nav__list'>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          Gallery
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
