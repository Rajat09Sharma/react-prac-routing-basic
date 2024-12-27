import { Link, useParams } from "react-router-dom"


export default function ProductDetailPage() {
    const params=useParams();
    const id=params.productId
  return (
    <div>
        <h1>{id}</h1>
        <Link to=".." relative="path">back</Link>
    </div>
  )
}
