import React from "react";
import logo from "../assets/Images/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-20 md:px-24 lg:px-28 mt-4 cursor-pointer font-poppins">
      <nav>
        <ul className="flex justify-between ">
          <Link to="/">
            <div className="flex justify-center items-center gap-3">
              <li>
                <img src={logo} alt="" className="h-12 w-12" />
              </li>
              <li className="text-xl font-medium">AIMS ACADEMY</li>
            </div>
          </Link>

          <div className="flex gap-8 justify-center items-center text-lg font-normal ">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/about-us">
              <li>About Us</li>
            </NavLink>

            <NavLink to="/admissions">
              <li>Admissions</li>
            </NavLink>

            <NavLink to="/academics">
              <li>Academics</li>
            </NavLink>

            <NavLink to="/extra-curricular">
              <li>Extra Curricular</li>
            </NavLink>

            <NavLink to="/notice-and-news">
              <li>Notice and News</li>
            </NavLink>

            <NavLink to="/contact-us">
              <li>Contact Us</li>
            </NavLink>
          </div>
        </ul>
      </nav>
      <hr className="mt-3" />
    </div>
  );
};

export default Header;
