import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: "p1", tile: "Product 1" },
    { id: "p2", tile: "Product 2" },
    { id: "p3", tile: "Product 3" }
]

export default function ProductsPage() {
    return (
        <div>
            <h1>The products page</h1>
            <ul>
                {PRODUCTS.map(item => <li key={item.id}><Link to={item.id}>{item.tile}</Link></li>)}
            </ul>
        </div>
    )

}