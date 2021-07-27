import React from "react";

export const Card = ({ product }) => {
    const { brand, image, name, price, size, id, ideal } = product;
    return (
        <div className="w-40 h-80 cursor-pointer">
            <img src={image} alt="" className="h-52" />
            <div className="flex flex-col gap-y-1">
                <span className="font-light text-sm">{brand}</span>
                <p className="text-sm font-bold truncate">{name}</p>
                <div className="flex justify-around">
                    <span>{ideal[0]}</span>
                    <span>Size: {size[0]}</span>
                </div>

                <strong>Price: {price}</strong>
            </div>
        </div>
    );
};
