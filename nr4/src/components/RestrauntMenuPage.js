import { useEffect, useState } from "react";
import Shimmer from "./shimmar";

const RestrauntMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json =await data.json()
        console.log(json)
        setResInfo(json.data)
    }; 
    
    return(resInfo===null)?<Shimmer/>:(
        <div className="menu">
            <h1>{resInfo.data.data.cards[1].card.gridElements.infoWithStyle.restaurants}
            </h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>burgers</li>
                <li> diet coke</li>
            </ul>
        </div>
    )
}
export default RestrauntMenu;