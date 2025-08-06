// File: components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Irfan's <span>Keepsake</span></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/coupons">Coupon</Link></li>
                <li><Link to="/gift">Gift</Link></li>
                <li><Link to="/crossword">Crossword</Link></li>
            </ul>
        </nav>
    );
}