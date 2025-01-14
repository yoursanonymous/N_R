import ItemList from "./ItemList";

const RestrauntCategories=({data})=>{
    console.log(data);
    return(
        <div>
        <div className="w-full my-2 bg-gray-400 shadow-lg p-4 ">
            <div className=" flex justify-between">
                
            <span className="font-bold text-lg">{data.title}-({data.itemCards.length})</span>
            <span >⬇</span>
            </div>
            <ItemList key={data.title} items={data.itemCards}/>
        </div>
        </div>
    )
}
export default RestrauntCategories