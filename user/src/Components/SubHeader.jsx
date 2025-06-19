import React from 'react'
import logo from '../assets/SHOPSTREAK (2).png'; // Adjust the path as necessary
import Search from './Search';
import AuthName from './AuthName';
import CWC from './CWC';
function SubHeader() {
    return (
        <div className='container mx-auto'>

            <div className='flex flex-col items-center justify-between lg:flex-row lg:items-center gap-4 py-4'>
                <div className='flex flex-col items-center  gap-4 lg:flex-row'>
                    <img src={logo} alt="" className='min-w-[350px]' />
                    <Search />
                </div>
                <div className='flex flex-col items-center  gap-4 lg:flex-row'>
                    <AuthName />
                    <CWC />
                </div>
            </div>
        </div>
    )
}

export default SubHeader