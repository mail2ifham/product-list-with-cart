import React, { useRef, useState, useEffect } from "react";
import "./addItemButton.css";
import PlusIcon from "../icon/PlusIcon";
import MinusIcon from "../icon/MinusIcon";
import CartIcon from "../../assets/images/icon-add-to-cart.svg";

function AddItemButton({
  itemName,
  itemPrice,
  cartItems,
  setCartItems,
  sa,
  setSa,
}) {
  // const [isAddToCartButtonClicked, setIsAddToCartButtonClicked] =
  //   useState('');
  const [qty, setQty] = useState(1);

  const obj = {
    itemName,
    itemPrice,
    itemQty: 1,
  };

  function handleAddToCartButton() {
    setQty(1);
    // setIsAddToCartButtonClicked(itemName);
    setSa([...sa, itemName]);
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
    // qty === 0 && setSa([]);
  }, [qty]);

  useEffect(() => {
    console.log(sa);
  }, [sa]);

  return (
    <div
      className={
        sa.length > 0 && sa.includes(itemName)
          ? "add-to-cart-container background-color"
          : "add-to-cart-container  "
      }
    >
      <div
        className={
          sa.length > 0 && sa.includes(itemName)
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
          sa.includes(itemName)
            ? "item-selected "
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

// className={`add-to-cart ${
//   sa.length > 0 && sa.find((s) => s === itemName) && "display-none"
// }`}
