import "./Header.css";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left">
          <span>
            <FaTruck /> Free Delivery Above ₹499
          </span>

          <span>
            <FaMapMarkerAlt /> India
          </span>
        </div>

        <div className="right">
          <span>
            <FaPhoneAlt /> +91 9100211791
          </span>

          <span>
            <FaUser /> Login
          </span>

          <span className="cart">
            <FaShoppingCart /> Cart (0)
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="logo">
          <h1>SuperMart</h1>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for Products..."
          />

          <button>Search</button>
        </div>
      </header>
    </>
  );
}

export default Header;