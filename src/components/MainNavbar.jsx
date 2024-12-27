import { NavLink } from "react-router-dom";


export default function MainNavbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/root" className={({ isActive }) => isActive ? "active" : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="products" className={({ isActive }) => isActive ? "active" : undefined} >Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
