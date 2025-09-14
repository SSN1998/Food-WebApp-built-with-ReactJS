import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("done");
    
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length==0 && (<h1>Cart is empty. Add items to the cart!</h1>)}
        <ItemList items={cartItems} /> 
      </div>
    </div>
  );
};

export default Cart;
