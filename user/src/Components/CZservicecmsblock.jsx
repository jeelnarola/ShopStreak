import React from 'react'
import { FaTruck, FaGift, FaHeadset, FaWallet, FaUndo } from "react-icons/fa";
import img4 from '../assets/4.jpg'
import { FaInstagram } from 'react-icons/fa6';

const CZservicecmsblock = () => {
    const features = [
        {
            icon: <FaTruck size={35} />,
            title: "Free Shipping",
            subtitle: "For all Orders Over $100",
        },
        {
            icon: <FaUndo size={35} />,
            title: "30 Days Returns",
            subtitle: "For an Exchange Product",
        },
        {
            icon: <FaWallet size={35} />,
            title: "Secured Payment",
            subtitle: "Payment Cards Accepted",
        },
        {
            icon: <FaGift size={35} />,
            title: "Special Gifts",
            subtitle: "Our First Product Order",
        },
        {
            icon: <FaHeadset size={35} />,
            title: "Support 24/7",
            subtitle: "Contact us Anytime",
        },
    ];

    return (

        <div className="border-b-2 border-gray-200 bg-white py-10 pb-20">
            <div className="container mx-auto">
                <div className="">
                    <div className="flex items-center justify-around">
                    {features.map((feature, index) => (
                          <div key={index} className="flex flex-col justify-between items-center text-center space-y-2 mr-20px">
                                <div className="text-black text-5xl">{feature.icon}</div>
                                <h3 className="font-semibold text-lg">{feature.title}</h3>
                                <p className="text-sm text-gray-350">{feature.subtitle}</p>
                            </div>
                    ))}
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default CZservicecmsblock