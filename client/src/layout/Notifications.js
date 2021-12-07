import React from 'react'
import { Link } from 'react-router-dom';
import { Aside } from './Aside';

import './css/style_main.css';
import Logo from './images/logosony.png';
import { NavBar } from './NavBar';

export const Notifications = () => {
    return (
        <div>
           
            <Aside/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* Navbar */}
                <NavBar/>
            </main>
        </div>
    )
}
