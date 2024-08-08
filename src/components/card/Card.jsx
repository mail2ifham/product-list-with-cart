import "./card.css";
import AddItemButton from "../addItemButton/AddItemButton";
import img from '../../assets/images/image-waffle-desktop.jpg'

function Card({
  itemName,
  itemCategory,
  itemPrice,
  itemImage,
  cartItems,
  setCartItems,
}) {
  return (
    <div className="card">
      <picture>
        <source media="(min-width: 768px)" srcSet={img} />
        <source
          media="(min-width: 427px) and (max-width: 768px)"
          srcSet={itemImage.tablet}
        />
        <img
          className={
            cartItems.some((item) => item.itemName === itemName)
              ? "card-border"
              : ""
          }
          src={itemImage.mobile}
          alt=""
        />
      </picture>
      <div className="add-to-button">
        <AddItemButton
          cartItems={cartItems}
          setCartItems={setCartItems}
          itemName={itemName}
          itemPrice={itemPrice}
          itemThumbnail={itemImage.thumbnail}
        />
      </div>
      <p className="dessert-category">{itemCategory}</p>
      <p className="dessert-name">{itemName}</p>
      <p className="dessert-price">{`$${itemPrice.toFixed(2)}`}</p>
    </div>
  );
}

export default Card;
