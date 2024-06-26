'use client'; 

import React, { useEffect, useLayoutEffect, useRef } from 'react';


interface PhotoListProps {
  photos: string[];
}

const PhotoList2: React.FC<PhotoListProps> = ({ photos }) => {
  const waterfall_container:any = useRef()
  
  useLayoutEffect(() => {
    let columns = Math.floor(window.innerWidth / 300)
    calcuHeight(columns);

    window.addEventListener('resize', () => {
      let columns = Math.floor(window.innerWidth / 300)
      calcuHeight(columns)
    })

    // 监听滚动事件
    window.addEventListener('scroll', lazyLoad);

  }, [])

  function calcuHeight(columns:number) {
  
    const items = waterfall_container.current?.querySelectorAll('.item') || [];

    // 定义列数和列宽
    const columnWidth = 300;

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
  return (
    <div className='relative flex flex-wrap flex-col' id="waterfall-container" ref={waterfall_container}>
      {photos.map((photo, index) => {
        return (
          <div key={index} className='lazy-load item bg-black opacity-30 border-4 transition-all duration-500' style={{ backgroundColor: getRandomColor(), height: index%3 == 0 ? '300px' : '160px', width: '300px' }}>
            index: {index}
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
  const images:NodeListOf<any> = document.querySelectorAll('.lazy-load');
  images.forEach(img => {
    if (isInViewport(img)) {
      img.style.backgroundColor = randomColorSet(); // 移除懒加载类，避免重复加载
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
