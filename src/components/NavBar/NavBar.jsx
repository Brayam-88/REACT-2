import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        
        <h1>Burzaco Market</h1>
      
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/2`}> Hidratacion </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/1`}> Digitales </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/3`}> Termos </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar