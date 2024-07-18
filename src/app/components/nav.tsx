'use client';

import Link from 'next/link';
import useAuth from '../hooks/useAuth';

// 获取服务器端数据
export async function getServerSideProps(context: any) {
  const data = await fetch('/api/user/info') // 替换为你的静态数据API
    .then((res) => res.json());
  console.log(data);
  return {
    props: { initialData: data }, // 将数据作为props传递给页面组件
  };
}

const Nav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ul className="flex nav__list">
      <li>
        <Link href="/">Home</Link>
      </li>
      {/* <li>
        <Link href="/about">
          About
        </Link>
      </li> */}
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      { !isAuthenticated ? (
        <>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">Mine</Link>
        </li>
      )
    }
    </ul>
  );
};

export default Nav;
