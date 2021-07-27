import React from "react"
import { Header } from "../components/Header"
import { View } from "../components/View"
import { Sort } from "../components/Sort"
import { Filter } from "../components/Filter"
export const Home = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-5">
                <Filter />
                <View />
                <Sort />
            </div>
        </>

    )
}
