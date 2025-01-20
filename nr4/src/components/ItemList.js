import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleADDItem = (item) => {
    dispatch(addItems(item));
  };
  if (!items || items.length === 0) {
    return <p>No items available</p>;
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-200 border b-2 m-2 p-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item.card.info.name} </span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                .00
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                onClick={() => handleADDItem(item)}
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className=" w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
