// File: components/CouponCard.jsx
import React from 'react';

export default function CouponCard({ title, desc }) {
    return (
        <div className="coupon-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
