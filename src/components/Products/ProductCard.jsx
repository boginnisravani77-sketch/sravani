import "./Products.css";

import WishlistButton from "../ProductFeatures/WishlistButton";
import Rating from "../ProductFeatures/Rating";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <Rating rating={4} />

      <p className="price">
        ₹ {product.price}
      </p>

      <div className="cart-row">

        <button className="cart-btn">
          Add To Cart
        </button>

        <WishlistButton />

      </div>

    </div>

  );

}

export default ProductCard;