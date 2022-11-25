import { useEffect, useState } from "react";
import Axios from 'axios'

export interface ProductsType {
    id: string
    image: string
    title: string
    price: number
}
const Products = () => {
    const [products, setProducts] = useState<ProductsType[]>()
    const fetchAllProducts = async () => {
        const response = await Axios.get("http://localhost:5000/api/products")
        setProducts(response.data)
        // console.log(response);
    }
    useEffect(() => {
        fetchAllProducts()
    }, [products])

    return (
        <div>
            <h1>Products</h1>
            <div className="grid grid-cols-3 gap-20 mx-20">

                {
                    products?.map((product) => (
                        <div key={product.id} className="">
                            <h1 className="text-xl z-100">{product.title}</h1>
                            <img className="rounded-lg hover:overflow-y hover:scale-105 transition-all z-10" src={product.image} alt={product.title} />
                            <h3 className="font-bold">{product.price}$</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;