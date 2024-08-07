import "./cardView.css";
import Card from "../card/Card";

function CardView({ data, cartItems, setCartItems }) {
  return (
    <div className="card-view-container">
      <h1>Desserts</h1>
      <div className="card-view">
        {data.map((item) => (
          <Card
            key={item.name}
            itemName={item.name}
            itemCategory={item.category}
            itemPrice={item.price}
            itemImage={item.image}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default CardView;
