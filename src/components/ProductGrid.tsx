import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Product {
    id: number;
    title: string;
}


export const ProductGrid = () => {
const [products, setProducts] = useState<Product[]>([]);
const [error, setError] = useState('');

useEffect(() => {
    apiClient.get<Product[]>('/products')
    .then( res => setProducts(res.data))
    .catch(err => setError(err.message))
})

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {products.map( product => <li key={product.id}>{product.title}</li>)}
    </ul>
    </>
  )
}
