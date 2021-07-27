import React from "react"
import { Card } from "./Card"
import { useStore } from "../context/StoreProvider"
import { getSortedProducts, getFilteredProducts } from "../utils"

export const View = () => {

    const { sortValue, products, sizes, brands, idealFor } = useStore()

    const sortedProducts = getSortedProducts(products, sortValue)

    const filteredProducts = getFilteredProducts(sortedProducts, { idealFor, sizes, brands })

    return (
        <div className=" sm:container sm:mx-auto m-2 flex flex-wrap gap-x-24 gap-y-8 justify-center col-start-2 col-end-6">
            {filteredProducts.map(product => <Card key={product.id} product={product} />)}
        </div>
    )
}
