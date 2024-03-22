import Layout from './layout/index'
import PhotoList from './PhotoList'

import SearchInput from '@/app/components/SearchInput';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="min-h-screen">
          {/* 首屏 */}
          <section className="flex flex-wrap h-screen bg-white main__content--height border-b-black">
            {/* 左边 */}
            <div className="w-1/2 h-full border-r-black flex flex-col justify-center">
              <div className="text-center">
                <h1 className="font-medium text-6xl">LIMAGES</h1>
                <div className="mt-5 mb-10 text-xl">Free high-resolution images for everyone.</div>
                <div className='text-center'>
                  <div className='w-400 inline-block pb-2 border-b-2 border-black'><SearchInput></SearchInput></div>
                </div>
              </div>
            </div>
            {/* 右边 */}
            <div className="w-1/2">
              <div className="w-full h-full banner--right bg-cover bg-no-repeat bg-center">
              </div>
            </div>
          </section>
          {/* 瀑布流 */}
          {/* 两个屏幕 */}
          <section>
            <PhotoList photos={[]}></PhotoList>
          </section>
          {/* 底部图片加描述 */}
          <section></section>
        </main>
      </Layout>
    </>
  );
}
