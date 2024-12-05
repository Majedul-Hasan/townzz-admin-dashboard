'use client'
import React, { useState } from 'react';
import NavbarSlider from './NavbarSlider';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className='w-fit border-r-2'>
            <NavbarSlider isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}></NavbarSlider>
        </div>
    );
};

export default Navbar;