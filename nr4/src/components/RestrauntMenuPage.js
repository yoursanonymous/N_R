import { useEffect, useState } from "react";
import Shimmer from "./shimmar";

const RestrauntMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.690457&lng=77.33467069999999&restaurantId=32128&catalog_qa=undefined&submitAction=ENTER"        )
        const json =await data.json()
        console.log(json.data)
        setResInfo(json.data)

    }; 
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{};

    const {itemCards}=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card||{}

    return (resInfo===null)? <Shimmer/>:
    (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>


            <ul>
                <li>{itemCards[0].card}</li>
                <li>burgers</li>
                <li> diet coke</li>
            </ul>
        </div>
    )
}
export default RestrauntMenu;