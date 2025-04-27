"use client"

import Products from "@/app/(main)/products/page"

function addToCart() {

    const handleAddTOCart = () => {
        localStorage.setItem("product",JSON.stringify(Products))
    }

    return (
        <button
        onClick={(handleAddTOCart) => {
            console.log("added to cart")
        }}
        >
        Add to cart
        </button>
    )
}


export default addToCart;