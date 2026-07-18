import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function WishlistButton() {

  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        width: "45px",
        height: "45px",
        border: "none",
        borderRadius: "8px",
        background: "#f5f5f5",
        cursor: "pointer",
        fontSize: "20px",
        color: liked ? "red" : "#888",
        transition: "0.3s"
      }}
    >
      <FaHeart />
    </button>
  );
}

export default WishlistButton;