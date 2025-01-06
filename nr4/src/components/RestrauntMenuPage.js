import { useEffect, useState } from "react";
import Shimmer from "./shimmar";
import { useParams } from "react-router-dom";
import { Menu } from "../utils/constants";
const RestrauntMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams()
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(
           Menu+resId      
        )
        const json =await data.json()
        console.log(json.data)
        setResInfo(json.data)

    };
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{};

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
 
    if(resInfo===null){
        return <Shimmer/>
    }
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>

            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}-{"Rs"}{item.card.info.price/100}.00</li>
                    // <li>{item.card.info.offerTags[0].subTitle}-{item.card.info.offerTags[0].title}</li>
                    ))}
            </ul>
        </div>
    ) 
}

export default RestrauntMenu;