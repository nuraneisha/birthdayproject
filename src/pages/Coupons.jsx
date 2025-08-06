import React from 'react';
import { Link } from 'react-router-dom';
import '../Coupons.css';

const couponList = [
  { id: 1, title: 'Unlimited Hugs 🫂', image: '/images/1.png' },
  { id: 2, title: 'Lunch & Movie Date 🍿', image: '/images/2.png' },
  { id: 3, title: 'Unlimited Kisses 💋', image: '/images/3.png' },
  { id: 4, title: 'Unlimited Facetimes 😍', image: '/images/4.png' },
  { id: 5, title: 'Birthday Gift 🎁', image: '/images/5.png' },
  { id: 6, title: 'Neck Massage 💆', image: '/images/6.png' }
];

export default function Coupons() {
    return (
        <div className="coupons-page">
            <h1>Coupons for your special day ♡</h1>
            <h3>Terms and condition</h3>
            <p>Please accept these terms and condition before using your coupons. Coupons are only valid with Nur Safiyya and not other girls!! Nur Safiyya is not responsible for lost coupons, however, she may feel bad and give u a little something extra to make up for it :) 
Expiration: The day before next year’s birthday so we can do another exciting things next year. The coupon must be presented to Nur Safiyya for redemption. Do Not Decline 🙎🏻‍♀️</p>
            <div className="button-group">
                <button
                    className="button-accept"
                    onClick={() => window.location.href = 'https://wa.link/fdm452'}
                >
                    Accept
                </button>
                <button className="button-accept">Decline</button>
            </div>
            <div className="coupon-list">
                {couponList.map((coupon) => (
                    <Link key={coupon.id} to={`/coupons/${coupon.id}`} className="coupon-card">
                        <img src={coupon.image} alt={coupon.brand} />
                        <h3>{coupon.brand}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}