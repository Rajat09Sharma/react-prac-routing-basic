import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/products");
    }

    return (
        <div>
            <h1>The Home Page</h1>
            <Link to="/products">view our products.</Link>
            <button onClick={handleClick}>See Products</button>
        </div>
    )
}
