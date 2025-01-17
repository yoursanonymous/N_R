import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./shimmar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Menu } from "../utils/constants";
import RestrauntCategories from "./RestrauntCategories";
const RestrauntMenu=()=>{
    const {resId}=useParams()
    
    const [showIndex,setShowIndex]=useState(null)
    const resInfo=useRestrauntMenu(resId);
    if(resInfo===null) return <Shimmer/>
    

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // const fetchMenu=async()=>{
    //     const data=await fetch(
    //        Menu+resId      
    //     )
    //     const json =await data.json()
    //     console.log(json.data)
    //     setResInfo(json.data)
    // };

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{};
    
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    const category=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(category);
    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl my-10">{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>

            {/* <ul>
                {itemCards?.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name}-{"Rs"}{item.card.info.price/100}.00</li>
                    // <li>{item.card.info.offerTags[0].subTitlek}-{item.card.info.offerTags[0].title}</li>
                    ))}
            </ul> */}
            {/* this is a controlled component */}
           {category.map((category,index)=>(
            <RestrauntCategories 
            className="m-4 p-4"
            data={category?.card?.card}
            showItems={index===showIndex? true:false}
            setShowIndex={()=>setShowIndex(index)}
            />))}
        </div>
    ) 
}

export default RestrauntMenu;