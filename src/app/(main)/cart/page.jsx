"use client"
import React, { useEffect } from "react"

function page() {

    const [cartProducts, setCartProducts] = useState ([]);

const getProductsFromStorage = async () => {
    const result = localStorage.getItem('products')
    const products = await JSON.parse(products)
    setCartProducts(products)
}

    useEffect(() => {
      getProductsFromStorage();
    }, [] )

    return  <div>cart</div>
}

export default page