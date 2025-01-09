import RestrauntCard from "./RestrauntCard";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Shimmer from "./shimmar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  //create a local state variable
  const [listOfRestraunt, setListOfRestraunt] = useState([]); //this is array destructuring
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  const [searchText, setSeachText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  // this callback console.log fucntion wil be caled after rendering the body

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const OnlineStatus=useOnlineStatus();
  if(OnlineStatus===false){
    return(<h1> you are offline</h1>)
  }

  // const fetchD=async()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/update");
  //   const json2=await data.json2();
  //   console.log(json2)
  // }
  
  return listOfRestraunt.length === 0 ?(
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filtered = listOfRestraunt.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filtered);
            }}
          >search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunt.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top rated restraunt
        </button>
      </div>
      <div className="res-conatiner">
        {filteredRestraunt.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restraunts/"+restraunt.info.id}><RestrauntCard resData={restraunt} />
            </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
