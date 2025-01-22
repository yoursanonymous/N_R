import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch=useDispatch()
  const handleCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
      <button
      className="p-2 m-3 text-white bg-black"
      onClick={handleCart}
      >
        clear existing cart
      </button>
      {cartItems.length===0 && <h1>add items to cart</h1>}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
