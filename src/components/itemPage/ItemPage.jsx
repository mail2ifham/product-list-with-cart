import CardView from "../cardView/CardView";
import data from "../../data.json";
import "./itemPage.css";
import Cart from "../cart/Cart";
import { useEffect, useState } from "react";

function ItemPage() {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(removeItemName){
    setCartItems( cartItems.filter(item => item.itemName !== removeItemName));
   }
  return (
    <div className="item-page">
      <CardView data={data} cartItems={cartItems} setCartItems={setCartItems}/>
      <Cart removeItem={removeItem} cartItems={cartItems} />
    </div>
  );
}

export default ItemPage;
