import "./NavBar.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav id="sidebar" className={!props.active ? "active" : null}>
      <div className="sidebar-header">
        <h3>Plant Base</h3>{" "}
        <div id="dismiss">
          <FaArrowLeft onClick={props.hideMenu} />
        </div>
      </div>
      <ul className="list-unstyled components">
        <p style={{'fontWeight': 'bold'}}>MENU</p>
        <li style={{'fontWeight': 'bold'}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{'fontWeight': 'bold'}}>
          <a href="/">About</a>
        </li>
        <li>
          <a
            href="#plantsSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdownToggle"
          >
            Plants
          </a>
          <ul className="collapse list-unstyled" id="plantsSubmenu">
            <li>
              <Link to="/shop/plants/small-avarage">Small and Avarage plants</Link>
            </li>
            <li>
              <Link to="/shop/plants/big-trees">Big plants and trees</Link>
            </li>
            <li>
              <Link to="/shop/plants/suculents">Suculents</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/shop/pots">Pots</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
