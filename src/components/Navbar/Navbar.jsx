import "./Navbar.css";
import {
  FaBars,
  FaHome,
  FaAppleAlt,
  FaGlassWhiskey,
  FaShoppingBasket,
  FaTags,
} from "react-icons/fa";

function Navbar({ setCategory }) {
  return (
    <nav className="navbar">

      <div className="all-categories">
        <FaBars />
        <span>All Categories</span>
      </div>

      <ul className="nav-links">

        <li onClick={() => setCategory("Home")}>
          <FaHome /> Home
        </li>

        <li onClick={() => setCategory("Fruits")}>
          <FaAppleAlt /> Fruits & Vegetables
        </li>

        <li onClick={() => setCategory("Dairy")}>
          Dairy & Bakery
        </li>

        <li onClick={() => setCategory("Beverages")}>
          <FaGlassWhiskey /> Beverages
        </li>

        <li onClick={() => setCategory("Snacks")}>
          Snacks
        </li>

        <li onClick={() => setCategory("Household")}>
          <FaShoppingBasket /> Household
        </li>

        <li onClick={() => setCategory("Personal Care")}>
          Personal Care
        </li>

        <li onClick={() => setCategory("Cleaning")}>
          Cleaning Brushes
        </li>

        <li onClick={() => setCategory("Skin Care")}>
          Skin Care
        </li>

        <li onClick={() => setCategory("Offers")}>
          <FaTags /> Offers
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;