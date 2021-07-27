import React from 'react'
export const Header = () => {
    return (
        <header className=" h-12 w-screen bg-blue-500">
            <div className="sm:container sm:mx-auto px-4 flex justify-between items-center h-full text-white">
                <div>
                    <h3>Flipkart</h3>
                </div>
                {/* <input type="text" placeholder="search products" className="pl-1 text-black" /> */}
                <nav>
                    <ul>
                        {/* <li>Home</li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}