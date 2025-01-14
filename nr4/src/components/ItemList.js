const ItemList=({items})=>{
    console.log(items);
    return (
        <div>
            {items.map((items)=>(
            <div key={items.card.info.id} className="bg-gray-500 m-5 p-4  text-left">
                <div className="p-2"> 
                    <span >{items.card.info.name}</span>
                    <span> price- {items.card.info.price 
                    ?items.card.info.price/100
                    : items.card.info.defaultPrice/100}
                    </span>
                </div>
                <p className="text-xs">{items.card.info.description}</p>
            </div>
            ))}
        </div>
    )
}

export default ItemList;