'use client'; 

import { useRouter } from 'next/navigation'
import React, { useEffect, useLayoutEffect, useRef } from 'react';


interface PhotoListProps {
  photos: string[];
}

const PhotoWidth = 300;

const PhotoList2: React.FC<PhotoListProps> = ({ photos }) => {
  const waterfall_container:any = useRef()
  const router = useRouter()

  const lastImg = useRef<any>()
  
  useLayoutEffect(() => {
    changeHeight();

    window.addEventListener('resize', changeHeight)

    // 监听滚动事件
    window.addEventListener('scroll', () => {
      lazyLoad()
      changeHeight()
    });

    adjustContentHeight()
  }, [])

  

  function changeHeight() {
    let columns = Math.floor(window.innerWidth / PhotoWidth)
    calcuHeight(columns)
  }

  function gotoDetail(id: number) {
    router.push('/photo/detail?id='+id)
  }

  function calcuHeight(columns:number) {
  
    const items = waterfall_container.current?.querySelectorAll('.item') || [];

    // 定义列数和列宽
    const columnWidth = PhotoWidth;

    // 定义一个数组来存储每列的高度
    const columnHeights = Array.from({ length: columns }, () => 0);

    // 遍历所有元素，计算位置并进行排列
    items.forEach((item:any) => {
      // 找到最短的列
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      
      // 设置元素的位置和高度
      item.style.position = 'absolute';
      item.style.left = shortestColumn * columnWidth + 'px';
      item.style.top = columnHeights[shortestColumn] + 'px';
      
      // 更新最短列的高度
      columnHeights[shortestColumn] += item.offsetHeight + 10;
    })
  }

  function adjustContentHeight () {
    // 获取最后一张图片的位置
    lastImg.current && (
      lastImg.current.onload = (e:any) => {
        console.log(e)
      }
    )
  }
  return (
    <div className='relative flex flex-wrap flex-col' id="waterfall-container" ref={waterfall_container}>
      {photos.map((photo: any, index) => {
        return (
          <div key={index} className='lazy-load item border-4 border-transparent transition-all duration-500 blur-sm' style={{ width: PhotoWidth+'px' }}>
            {/* index: {index} */}
            <img ref={index == photos.length - 1 ? lastImg : null} data-src={photo.url.replace('public', 'api')} alt="" onClick={() => gotoDetail(photo.id)}/>
          </div>
        )
      })}
    </div>
  );
};

export default PhotoList2;


function getRandomColor() {
  return 'grey'
}

function randomColorSet() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor.padStart(6, '0');
}

function lazyLoad() {
  const images:NodeListOf<any> = document.querySelectorAll('.lazy-load img');
  images.forEach(img => {
    if (isInViewport(img)) {
      // img.style.backgroundColor = randomColorSet(); // 移除懒加载类，避免重复加载
      const src = img.getAttribute('data-src');
      img.src = src; // 替换 src 属性，加载实际图片
      img.classList.remove('lazy-load'); // 移除懒加载类，避免重复加载
    }
  });
}

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
