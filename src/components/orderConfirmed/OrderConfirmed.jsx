import confirmIcon from "../../assets/images/icon-order-confirmed.svg";
import "./orderConfirmed.css";

function OrderConfirmed({ cartItems, handleNewOrder }) {
  let totalPrice = 0;
  return (
    <div onClick={handleNewOrder} className="order-confirmed-container">
      <div className="order-confirmed" onClick={(e) => e.stopPropagation()}>
        <div className="oc-header">
          <img src={confirmIcon} alt="" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </div>
        <div class="oc-body">
          <ul>
            {cartItems.length > 0 &&
              cartItems.map((cartItem, i) => {
                totalPrice += cartItem.itemPrice * cartItem.itemQty;
                return (
                  <li key={i}>
                    <img src={cartItem.itemThumbnail} alt="" />
                    <div>
                      <p className="item-name">{cartItem.itemName}</p>
                      <p>
                        {`${cartItem.itemQty}x`}
                        <span>{`@${cartItem.itemPrice.toFixed(2)}`}</span>
                      </p>
                    </div>
                    <p>{`$${(cartItem.itemPrice * cartItem.itemQty).toFixed(
                      2
                    )}`}</p>
                  </li>
                );
              })}
          </ul>
          <p className="total">
            Order Total <span> {`$${totalPrice.toFixed(2)}`}</span>
          </p>
        </div>
        <button className="new-order" onClick={handleNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;
