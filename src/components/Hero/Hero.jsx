import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="offer">🔥 Fresh & Organic</span>

        <h1>
          Fresh Groceries
          <br />
          Delivered To
          <br />
          Your Door
        </h1>

        <p>
          Buy fresh fruits, vegetables, dairy products,
          beverages and daily essentials at the best prices.
        </p>

        <button className="shop-btn">
          Shop Now <FaArrowRight />
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
          alt="Groceries"
        />

      </div>

    </section>
  );
}

export default Hero;