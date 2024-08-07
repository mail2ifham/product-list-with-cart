import CardView from "../cardView/CardView";
import data from "../../data.json";
import "./itemPage.css";
import Cart from "../cart/Cart";
import { useState } from "react";
import OrderConfirmed from "../orderConfirmed/OrderConfirmed";

function ItemPage() {
  const [cartItems, setCartItems] = useState([]);
  const [openOrderConfirmation, SetOrderConfirmation] = useState(false);

  function removeItem(removeItemName) {
    setCartItems(cartItems.filter((item) => item.itemName !== removeItemName));
  }

  function handleNewOrder() {
    SetOrderConfirmation(false);
    setCartItems([]);
  }
  return (
    <div className="item-page">
      <CardView data={data} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart
        removeItem={removeItem}
        cartItems={cartItems}
        SetOrderConfirmation={SetOrderConfirmation}
      />
      {openOrderConfirmation && (
        <OrderConfirmed
          cartItems={cartItems}
          SetOrderConfirmation={SetOrderConfirmation}
          handleNewOrder={handleNewOrder}
        />
      )}
    </div>
  );
}

export default ItemPage;
