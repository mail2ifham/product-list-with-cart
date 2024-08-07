import React, {useState, useEffect } from "react";
import "./addItemButton.css";
import PlusIcon from "../icon/PlusIcon";
import MinusIcon from "../icon/MinusIcon";
import CartIcon from "../../assets/images/icon-add-to-cart.svg";

function AddItemButton({
  itemName,
  itemPrice,
  cartItems,
  setCartItems,
  itemThumbnail,
}) {
  const [qty, setQty] = useState(1);

  const obj = {
    itemThumbnail: itemThumbnail,
    itemName,
    itemPrice,
    itemQty: 1,
  };

  function handleAddToCartButton() {
    setQty(1);
    setCartItems([...cartItems, obj]);
  }

  function handlePlus() {
    setQty(qty + 1);
  }
  function handleMinus() {
    setQty(qty - 1);
  }

  useEffect(() => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.itemName === obj.itemName
            ? { ...cartItem, itemQty: qty }
            : cartItem
        )
        .filter((c) => c.itemQty !== 0)
    );
  }, [qty]);

  return (
    <div
      className={
        cartItems.length > 0 &&
        cartItems.some((item) => item.itemName === itemName)
          ? "add-to-cart-container background-color"
          : "add-to-cart-container  "
      }
    >
      <div
        className={
          cartItems.length > 0 &&
          cartItems.some((item) => item.itemName === itemName)
            ? " add-to-cart display-none"
            : " add-to-cart "
        }
        onClick={() => handleAddToCartButton()}
      >
        <img className="icon-size" src={CartIcon} alt="" />
        <span className="aa">Add to Cart</span>
      </div>
      <div
        className={
          cartItems.some((item) => item.itemName === itemName)
            ? "item-selected  "
            : "item-selected display-none "
        }
      >
        <MinusIcon handleMinus={handleMinus} />
        <p className="Quantity">{qty}</p>
        <PlusIcon handlePlus={handlePlus} />
      </div>
    </div>
  );
}

export default AddItemButton;
