'use client'
import React, { useState } from 'react';
import NavbarSlider from './NavbarSlider';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const pathName = usePathname()

    return (
        <div className={`w-fit border-r-2 ${pathName == '/privacy-policy' ? "hidden" : "block"}`}>
            <NavbarSlider isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}></NavbarSlider>
        </div>
    );
};

export default Navbar;