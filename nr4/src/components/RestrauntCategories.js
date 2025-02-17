import ItemList from "./ItemList";
import { useState } from "react";
const RestrauntCategories=({data,showItems,setShowIndex})=>{
    console.log(data);
    
    const handleClick=()=> {
        setShowIndex()
    }
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className=" flex justify-between cursor-pointer "
            onClick={handleClick}  
            >
            <span className="font-bold text-lg">{data.title}-({data.itemCards.length})</span>
            <span >⬇</span>
            </div>
            {showItems &&
            <ItemList key={data.title} 
            items={data.itemCards}
            />}
        </div>
        </div>
    )
}
export default RestrauntCategories