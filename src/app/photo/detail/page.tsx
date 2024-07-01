'use client';

import { numberOrString } from "@/app/api/api";
import PImage from "@/app/components/PImage";
import usePhotoDetail from "@/app/hooks/usePhotoDetail";

export default function Detail({searchParams}: {searchParams: {id: numberOrString}}) {
  let id = searchParams.id;

  const { data } = usePhotoDetail(id);
  if(!data) return;
  
  return (
    <div className="w-640 m-auto">
      <h1>{ data.title }</h1>
      <PImage src={urlHandle(data.url)} imageProps={{
        width: 200,
      }}></PImage>
      <div className="article" dangerouslySetInnerHTML={{ __html: data.description }}>

      </div>
    </div>
  );
}

function urlHandle(url:string) {

  return '/' + url.replaceAll('\\','/')
}