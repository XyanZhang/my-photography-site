import React, { useEffect, useState } from "react";
import { getPictureDetail, numberOrString } from "../api/api";


export default function usePhotoDetail(id:numberOrString) {
  const [data, setData] = useState<any>(null)
  
  useEffect(() => {
    if(id) {
      getDetail(id)
    }
  }, [id])

  function getDetail(id:numberOrString) {

    getPictureDetail(id).then((d: any) => {
      setData(d || null)
    })
  }

  return {
    data
  }
}