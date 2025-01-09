import React, { useState } from 'react'
import { useEffect } from 'react';

import { Menu } from "../utils/constants";
const useRestrauntMenu=(resId)=> {
    const [resInfo, setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data =await fetch(Menu+resId)
        const  json=await data.json();
        console.log(json)
        setResInfo(json.data);
    }
  return resInfo;
}
export default useRestrauntMenu