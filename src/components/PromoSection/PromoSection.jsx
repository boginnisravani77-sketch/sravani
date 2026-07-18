import "./PromoSection.css";

function PromoSection() {
  return (
    <section className="promo-section">

      <div className="promo-card green">

        <div className="promo-content">
          <h2>Flat 20% OFF</h2>

          <p>On Your First Order</p>

          <button>Use Code : FIRST20</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400"
          alt="Offer"
        />

      </div>

      <div className="promo-card yellow">

        <div className="promo-content">
          <h2>Weekend Offer</h2>

          <p>Up To 50% OFF</p>

          <button>Shop Now</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=400"
          alt="Offer"
        />

      </div>

      <div className="promo-card pink">

        <div className="promo-content">
          <h2>Fresh Fruits</h2>

          <p>100% Organic</p>

          <button>Buy Now</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400"
          alt="Fruits"
        />

      </div>

    </section>
  );
}

export default PromoSection;