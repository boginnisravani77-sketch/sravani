import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h2>SuperMart</h2>

          <p>
            Your one-stop supermarket for fresh groceries,
            fruits, vegetables, dairy products and daily
            essentials at affordable prices.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Offers</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-box">

          <h3>Customer Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

        </div>

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad, India
          </p>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> support@supermart.com
          </p>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaTwitter />

            <FaYoutube />

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 SuperMart. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;