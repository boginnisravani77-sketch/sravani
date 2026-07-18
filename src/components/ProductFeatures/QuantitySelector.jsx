import { useState } from "react";
import "./ProductFeatures.css";

function QuantitySelector() {

  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="qty-box">

      <button onClick={decrease}>-</button>

      <span>{qty}</span>

      <button onClick={increase}>+</button>

    </div>
  );
}

export default QuantitySelector;