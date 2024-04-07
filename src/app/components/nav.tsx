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
        <Link href="/">
          Blog
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
      <li>
        <Link href="/upload">
          Upload
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
