import React, { createContext, useContext, useState, useReducer } from "react";
import products from "../data/products.json";
const StoreContext = createContext()

const initialState = {
    products: products,
    sortValue: '',
    sizes: [],
    brands: [],
    idealFor: []
}

const storeReducer = (state, action) => {
    const { brands, sizes, idealFor } = state
    switch (action.type) {
        case 'SORT_VALUE':
            return { ...state, sortValue: action.payload.value }
        case 'SET_BRAND':
            if (brands.includes(action.payload.value)) {
                return { ...state, brands: brands.filter(brand => brand !== action.payload.value) }
            }
            return { ...state, brands: brands.concat(action.payload.value) }
        case 'SET_SIZE':
            if (sizes.includes(action.payload.value)) {
                return { ...state, sizes: sizes.filter(size => size !== action.payload.value) }
            }
            return { ...state, sizes: sizes.concat(action.payload.value) }
        case 'SET_IDEAL_FOR':
            if (idealFor.includes(action.payload.value)) {
                return { ...state, idealFor: idealFor.filter(gender => gender !== action.payload.value) }
            }
            return { ...state, idealFor: idealFor.concat(action.payload.value) }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                sizes: [],
                brands: [],
                idealFor: []
            }
        default:
            return state
    }
}


export const StoreProvider = ({ children }) => {
    const [{ products, sortValue, sizes, brands, idealFor }, dispatch] = useReducer(storeReducer, initialState)
    return (
        <StoreContext.Provider
            value={{
                sortValue,
                dispatch,
                products,
                sizes,
                brands,
                idealFor
            }}>
            {children}
        </StoreContext.Provider>
    )
}


export const useStore = () => {
    return useContext(StoreContext)
}

