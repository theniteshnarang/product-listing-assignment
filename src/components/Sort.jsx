import React from "react"
import { useStore } from "../context/StoreProvider"

const Radio = ({ value, text }) => {
    const { sortValue, dispatch } = useStore()
    return (
        <>
            <label className="mr-4">
                <input
                    type="radio"
                    name="sort"
                    value={value}
                    className="mr-2"
                    checked={value === sortValue}
                    onChange={() => dispatch({ type: 'SORT_VALUE', payload: { value } })}
                />
                {text}
            </label>
        </>
    )
}

export const Sort = () => {

    return (
        <div className="flex flex-col fixed mx-4">
            <h3>Sort by price</h3>
            <Radio value="lowToHigh" text="Low To High" />
            <Radio value="highToLow" text="High To Low" />
        </div>
    )
}
