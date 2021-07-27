export const getSortedProducts = (products, sortValue) => {
    const newProducts = [...products]
    switch (sortValue) {
        case 'lowToHigh': return newProducts.sort((a, b) => a.price - b.price)
        case 'highToLow': return newProducts.sort((a, b) => b.price - a.price)
        default: return newProducts
    }
}

export const getFilteredProducts = (products, { idealFor, sizes, brands }) => {
    return products
        .filter(({ size }) => sizes.length > 0 ? size.some(s => sizes.includes(s)) : true)
        .filter(({ brand }) => brands.length > 0 ? brands.includes(brand) : true)
        .filter(({ ideal }) => idealFor.length > 0 ? ideal.some(gender => idealFor.includes(gender)) : true)
}