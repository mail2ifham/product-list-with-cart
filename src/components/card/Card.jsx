import React, { useRef, useState, useEffect } from "react";
import "./card.css";
import AddItemButton from "../addItemButton/AddItemButton";

function Card({
  itemName,
  itemCategory,
  itemPrice,
  itemImage,
  cartItems,
  setCartItems,
  sa,
  setSa
}) {
  return (
    <div className="card">
      <picture>
        <source media="(min-width: 768px)" srcSet={itemImage.desktop} />
        <source
          media="(min-width: 427px) and (max-width: 768px)"
          srcSet={itemImage.tablet}
        />
        <img src={itemImage.mobile} alt="" />
      </picture>
      <div className="add-to-button">
        <AddItemButton
          cartItems={cartItems}
          setCartItems={setCartItems}
          itemName={itemName}
          itemPrice={itemPrice}
          sa={sa}
          setSa={setSa}
        />
      </div>
      <p className="dessert-category">{itemCategory}</p>
      <p className="dessert-name">{itemName}</p>
      <p className="dessert-price">{`$${itemPrice.toFixed(2)}`}</p>
    </div>
  );
}

export default Card;
