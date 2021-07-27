import React from "react"
import { useStore } from "../context/StoreProvider"

const Checkbox = ({ value, name, filters }) => {
    const { dispatch } = useStore()
    return (
        <label>
            <input
                className="mr-1"
                type="checkbox"
                name={name}
                value={value}
                checked={filters.includes(value)}
                onChange={() => dispatch({ type: name, payload: { value } })}
            />
            {value}
        </label>
    )
}

export const Filter = () => {
    const brandsData = ["PUMA", "HELMONT", "Skashvi sarees", "METRONAUT"]
    const sizesData = ["S", "M", "L", "XL"]
    const idealForData = ["MEN", "WOMEN"]
    const { sizes, brands, idealFor } = useStore()

    return (
        <div className=" fixed top-32 mx-4">
            <h1 className="my-2">Filter</h1>
            <div className="flex flex-col gap-y-4">
                <fieldset>
                    <legend>Size</legend>
                    <div className="flex gap-x-4">
                        {sizesData.map(size => <Checkbox key={size} name="SET_SIZE" value={size} filters={sizes} />)}
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Brand</legend>
                    <div className="flex flex-col">
                        {brandsData.map(brand => <Checkbox key={brand} name="SET_BRAND" value={brand} filters={brands} />)}
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Ideal</legend>
                    <div className="flex gap-x-4">
                        {idealForData.map(gender => <Checkbox key={gender} name="SET_IDEAL_FOR" value={gender} filters={idealFor} />)}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
