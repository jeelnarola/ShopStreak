import React from 'react';
import mycom from '../assets/mountain-fox-vector-graphics.jpg';
import { MdDelete } from "react-icons/md";
const products = [
    {
        id: 1,
        title: "Apple Smart Watch / Midnight Aluminum",
        brand: "Initech space",
        price: "$51.40",
        originalPrice: "$58.00",
        image: mycom,
        composition: "Cotton",
        property: "Removable cover",
        style: "Classic"
    },
    {
        id: 2,
        title: "Apple Smart Watch / Midnight Aluminum",
        brand: "Initech space",
        price: "$51.40",
        originalPrice: "$58.00",
        image: mycom,
        composition: "Cotton",
        property: "Removable cover",
        style: "Classic"
    }
];

const MyCompare = () => {
    return (
        <div>
            <h1 className="text-2xl font-medium mb-8">Products Comparison</h1>

            <table className="table-auto w-full border-[1px] border-gray-300">
                <tbody>

                    {/* Features Row */}
                    <tr className="">
                        <td className="align-top border-r-[1px] border-gray-300 p-4 text-gray-600 font-medium w-[10%]">Features:</td>
                        <td className="align-top w-[100%]">
                            <div className="grid grid-cols-3 ">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="border-r-[1px] border-gray-300 p-4 flex flex-col items-center border-b-[1px] border-gray-300 relative"
                                    >
                                        <img
                                            src={product.image}
                                            alt="product"
                                            className="h-40 object-contain mb-2"
                                        />
                                        <MdDelete className='absolute text-xl right-8 cursor-pointer hover:text-red-500 '/>
                                        <p className="text-gray-500 text-sm">{product.brand}</p>
                                        <p className="text-md mt-1 text-center">{product.title}</p>
                                        <p className="text-red-600 font-semibold">
                                            <span className="text-gray-500 line-through mr-2">
                                                {product.originalPrice}
                                            </span>
                                            {product.price}
                                        </p>
                                    </div>
                                ))}  
                            </div>
                        </td>
                    </tr>

                    {/* Composition Row */}
                    <tr >
                                <td className="align-top border-r-[1px] border-t-[1px] border-gray-300 p-3 text-gray-600 font-medium">Composition</td>
                        <td className=" align-top">
                            <div className="grid grid-cols-3 ">
                                {products.map((product) => (
                                    <div key={product.id} className="text-gray-500 p-4 border-r-[1px] border-gray-200 text-center border-b-[1px] border-gray-300">
                                        {product.composition}
                                    </div>
                                ))}

                            </div>
                        </td>
                    </tr>

                    {/* Property Row */}
                    <tr >
                        <td className="align-top border-r-[1px] border-t-[1px] border-gray-300 p-4 text-gray-600 font-medium">Property</td>
                        <td className="align-top">
                            <div className="grid grid-cols-3">
                                {products.map((product) => (
                                    <div key={product.id} className="text-gray-500 p-4 border-r-[1px] border-gray-200 text-center border-b-[1px] border-gray-300">
                                        {product.property}
                                    </div>
                                ))}

                            </div>
                        </td>
                    </tr>

                    {/* Style Row */}
                    <tr className="border-b-[1px] border-gray-300">
                        <td className="align-top border-r-[1px] border-t-[1px] border-gray-300 p-4 text-gray-600 font-medium">Style</td>
                        <td className="align-top">
                            <div className="grid grid-cols-3 ">
                                {products.map((product) => (
                                    <div key={product.id} className="text-gray-500 p-4 border-r-[1px] border-gray-200 text-center">
                                        {product.style}
                                    </div>
                                ))}

                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>

            {/* Continue Shopping */}
            <div className="mt-4">
                <button className="text-sm text-black hover:underline">← Continue Shopping</button>
            </div>
        </div>
    );
};

export default MyCompare;
