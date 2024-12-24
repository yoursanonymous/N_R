import RestrauntCard from "./RestrauntCard";
import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import {useState , useEffect}from "react";
import Shimmer from "./shimmar";
const Body = () => {
    //create a local state variable
    const [listOfRestraunt,setListOfRestraunt]=useState([]);//this is array destructuring
    
    useEffect(()=>{
      fetchData();
    },[])
    // this callback console.log fucntion wil be caled after rendering the body


    const fetchData=async()=>{
      const data=
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    //conditional rendering
    if(listOfRestraunt.length===0){
      return <Shimmer/>
    }
    //fetch will return a pomise
    //can resolve a promise by .then .catch or async Await
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
                onClick={()=>{
                setListOfRestraunt();
                const filteredList=listOfRestraunt.filter(
                    (res)=>res.info.avgRating>4.5
                );
                setListOfRestraunt(filteredList)
            }}
            // onMouseOver={}
            >
                Top rated restraunt
            </button>
        </div>
        <div className="res-conatiner">
          {
            listOfRestraunt.map(restraunt=><RestrauntCard key={restraunt.info.id}resData={restraunt}/>)
          }
        </div>
      </div>
    );
  };
  export default Body