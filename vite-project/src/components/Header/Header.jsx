import { NavLink, Link } from "react-router-dom";
import { Photo } from "../../Photo";

export default function Header() {
  return (
    <header className="primary_site_header">
      <nav className="main_navbar_bar">
        <div className="brand_emblem_wrap">
          <Link to="/Page1">
            <img src={Photo.logoMain} alt="Delizioso Brand Logo" />
          </Link>
        </div>
        <ul className="navigation_link_group">
          <li>
            <NavLink to="/Page1" className={({ isActive }) => (isActive ? "nav_menu_item active" : "nav_menu_item")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Page2" className={({ isActive }) => (isActive ? "nav_menu_item active" : "nav_menu_item")}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/Page3" className={({ isActive }) => (isActive ? "nav_menu_item active" : "nav_menu_item")}>
              About us
            </NavLink>
          </li>
          <li>
            <a href="#order" className="nav_menu_item">
              Order online
            </a>
          </li>
          <li>
            <a href="#reservation" className="nav_menu_item">
              Reservation
            </a>
          </li>
          <li>
            <a href="#contact" className="nav_menu_item">
              Contact us
            </a>
          </li>
        </ul>
        <div className="header_control_cluster">
          <div className="cart_indicator_shell">
            <img src={Photo.cartIcon} alt="Shopping Cart" />
          </div>
          <button type="button" className="header_entry_button">
            Log in
          </button>
        </div>
      </nav>
    </header>
  );
}