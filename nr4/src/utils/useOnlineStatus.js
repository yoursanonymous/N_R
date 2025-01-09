import React, { useState, useEffect } from 'react'

 useOnlineStatus=()=> {
    //check if online
    const[OnlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",(event)=>{
            setOnlineStatus(true);
        })
        window.addEventListener("offline",(event)=>{
            setOnlineStatus(false);
        })
    },[])
    //boolean value
  return OnlineStatus;
}
export default useOnlineStatus