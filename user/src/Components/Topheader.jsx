import React, { useState, useEffect } from 'react';
import SubHeader from './SubHeader';
import Header from './Header';
// import logo from '../assets/SHOPSTREA K (2).png'; // Adjust the path as necessary
export default function Topheader() {
    const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
    const [isMdScreen, setIsMdScreen] = useState(false);

    // Detect screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            const isMd = window.innerWidth > 768;
            setIsMdScreen(isMd);
            setQuickLinksOpen(isMd); // Always show dropdown on md+
        };

        checkScreenSize(); // Initial check

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="">
            <div className='container mx-auto py-2 '>
                <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center'>
                    <div className='text-md  text-gray-500 lg:visible invisible text-center mb-2 lg:mb-0'>
                        Get up to 50% off new season styles, limited time only
                    </div>
                    <ul className='flex flex-wrap justify-center items-center gap-x-4 text-sm text-gray-500 relative'>
                        <li
                            className='relative cursor-pointer'
                            onMouseEnter={() => !isMdScreen && setQuickLinksOpen(true)}
                            onMouseLeave={() => !isMdScreen && setQuickLinksOpen(false)}
                        >
                            {!isMdScreen && (
                                <p className='border-r border-gray-300 pr-2'>Quick Links ▾</p>
                            )}
                            {isQuickLinksOpen && (
                                <div className={`z-10 ${isMdScreen ? 'static mt-0 bg-transparent shadow-none' : 'absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md'}`}>
                                    <ul className={`py-0 ${isMdScreen ? 'flex gap-x-4' : ''}`}>
                                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer border-r border-gray-300'>Help Center</li>
                                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer border-r border-gray-300'>Order Tracking</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className='border-r border-gray-300 pr-2'>
                            <p>English</p>
                        </li>
                        <li>
                            <p>USD</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-300' />
            <SubHeader/>
            <hr className='text-gray-300' />
            <Header />
            <hr className='text-gray-300' />

        </div>
    );
}
