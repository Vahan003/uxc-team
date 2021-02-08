import React from "react";
import '../styles/footer.sass'
const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <a href="#">About Us</a>
        <a href="#">Student Discount</a>
        <a href="#">Coupons</a>
      </div>
      <div className="info">
        <a href="#">Contact Us</a>
        <a href="#">Customer Service</a>
      </div>
      <div className="info">
        <a href="#">FAQ</a>
        <a href="#">Order Status</a>
      </div>
      <div className="info">
        <a href="#">Call Us: +123 456789</a>
        <a href="#">Hours: Monday-Friday 10:00-21:00</a>
      </div>
    </div>
  );
};

export default Footer;
