import { useParams } from "react-router-dom";



function ProductPage() {
    const params = useParams()

    return <>
    <h1>
    my ProductPage
    </h1>
    <p>{params.productId}</p>
    
    </>
}

export default ProductPage;