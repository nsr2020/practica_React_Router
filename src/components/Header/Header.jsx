import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
      <header>
          <nav>
              <ul>
                  <li>
                  <NavLink to="/" activeclassname="active">Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about" activeclassname="active">About</NavLink>
                  </li>
                  <li>
                  <NavLink to="/contact" activeclassname="active">Contact</NavLink>
                  </li>
                 
              </ul>
          </nav>
      </header>
    )
  }

export default Header