import Image from "next/image";
import Layout from './layout/index'
import PhotoList from './PhotoList'
export default function Home() {
  return (
    <>
      <Layout>
        <main className="min-h-screen">
          {/* 首屏 */}
          <section className="flex flex-wrap h-screen bg-white main__content--height">
            {/* 左边 */}
            <div className="w-1/2 h-full border--black">

            </div>
            {/* 右边 */}
            <div className="w-1/2 border--black">
              <div className="w-full h-full banner--right bg-cover bg-no-repeat bg-center">
              </div>
            </div>
          </section>
          {/* 瀑布流 */}
          <section>
            <PhotoList photos={[]}></PhotoList>
          </section>
        </main>
      </Layout>
    </>
  );
}
