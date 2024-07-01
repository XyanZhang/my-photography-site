import React, { useEffect, useState } from "react";
import { getPictures } from "../api/api";

export default function usePhotoList() {
  const [data, setData] = useState([])

  useEffect(() => {
    getList()
  }, [])

  function getList() {
    let payload = {
      page: 1,
      size: 10,
    }
    getPictures(payload).then((d: any) => {
      setData(d || [])
    })
  }

  return {
    data
  }
}