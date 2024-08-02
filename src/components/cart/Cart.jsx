import React, { useEffect, useState } from "react";
import "./cart.css";
import RemoveItemIcon from "../icon/RemoveItemIcon";
import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";

function Cart({ cartItems, removeItem }) {
  const [totalQty, setTotalQty] = useState(0);




  useEffect(() => {
  }, []);

  return (
    <div className="cart-container">
      <h2>Your Cart({totalQty && totalQty})</h2>
      {cartItems.length <= 0 && (
        <div className="empty-cart">
          <img src="src/assets/images/illustration-empty-cart.svg" />
          <p>Your added items will appear here</p>
        </div>
      )}
      <div className="cart">
        <ul className="item-list">
          {cartItems.length >= 0 &&
            cartItems.map((cartItem, i) => {
              return (
                <li key={i}>
                  <div className="item-container">
                    <h4>{cartItem.itemName}</h4>
                    <div>
                      <p>
                        <strong>{`${cartItem.itemQty}x`}</strong>
                      </p>
                      <p> {`@$${cartItem.itemPrice.toFixed(2)}`}</p>
                      <p>
                        <strong>{`$${(
                          cartItem.itemPrice * cartItem.itemQty
                        ).toFixed(2)}`}</strong>
                      </p>
                    </div>
                  </div>
                  <RemoveItemIcon removeItem={removeItem}  removeItemName={cartItem.itemName}/>
                </li>
              );
            })}
        </ul>
        <p>
          Order Total <span>$46.50</span>
        </p>
        <img src={carbonNeutralIcon} alt="" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
        <button>Confirm Order</button>
      </div>
    </div>
  );
}

export default Cart;
