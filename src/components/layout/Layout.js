import NavBar from "./NavBar";
import classes from "./Layout.module.css";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
import Backdrop from "../Backdrop";

function Layout(props) {
  const [menuActive, setMenuActive] = useState(false);

  function toggleActive() {
    setMenuActive(!menuActive);
  }

  return (
    <div className={classes.wrapper}>
      <NavBar hideMenu={toggleActive} active={menuActive} />
      {menuActive && <Backdrop />}
      <div className={classes.content}>
        <nav
          style={{ "zIndex": "1" }}
          className="pl-5 pr-5 navbar navbar-light bg-light sticky-top"
        >
          <span>
            <button
              style={{ "fontSize": "18px", "lineHeight": "18px" }}
              onClick={toggleActive}
              id="sidebarCollapse"
              className="btn"
            >
              <FaBars />
            </button>
            <a className="navbar-brand pl-5" href="/">
              Plant Base
            </a>
          </span>
          <span>
            <a href="/">Login</a>
            <span> | </span>
            <a className="pr-3" href="/">
              Register
            </a>
            <button
              style={{ "fontSize": "18px", "lineHeight": "18px" }}
              className="btn btn-outline-success"
            >
              <FaShoppingBasket />
            </button>
          </span>
        </nav>
        <div>{props.children}</div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Layout;
