import React from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Header.scss";
import logo from "../../assets/Logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <div className="header__links">
              <Link to={"/"} className="header__link">
                Home
              </Link>
              <Link to={"/"} className="header__link">
                Courses
              </Link>
              <Link to={"/"} className="header__link">
                About Us
              </Link>
              <Link to={"/"} className="header__link">
                Pricing
              </Link>
              <Link to={"/"} className="header__link">
                Contact
              </Link>
            </div>
          </div>
          <div className="header__right">
            <button className="header__btn">Sign Up</button>
            <button className="header__btn log">Login</button>
            <div className="header__burger">
              <button className="header__btn" onClick={toggleDrawer}>
                <svg
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z"
                    fill="#262626"
                  />
                </svg>
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla"
              >
                <div className="header__bur">
                  <Link to={"/"} className="header__link">
                    Home
                  </Link>
                  <Link to={"/"} className="header__link">
                    Courses
                  </Link>
                  <Link to={"/"} className="header__link">
                    About Us
                  </Link>
                  <Link to={"/"} className="header__link">
                    Pricing
                  </Link>
                  <Link to={"/"} className="header__link">
                    Contact
                  </Link>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
