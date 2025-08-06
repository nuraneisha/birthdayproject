import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../CouponDetails.css';

const couponData = {
  1: {
    id: 1,
    title: 'Unlimited Hugs 🫂',
    image: '/images/1.png'
  },
  2: {
    id: 2,
    title: 'Lunch & Movie Date 🍿',
    image: '/images/2.png'
  },
  3: {
    id: 3,
    title: 'Unlimited Kisses 💋',
    image: '/images/3.png'
  },
  4: {
    id: 4,
    title: 'One Wish 😍',
    image: '/images/4.png'
  },
  5: {
    id: 5,
    title: 'Birthday Gift 🎁 ',
    image: '/images/5.png'
  },
  6: {
    id: 6,
    title: 'Neck Massage 💆',
    image: '/images/6.png'
  }
};

export default function CouponDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const coupon = couponData[id];

  if (!coupon) {
    return <div>Coupon not found.</div>;
  }

  return (  // <-- Add this return
    <div className="coupon-detail" style={{ textAlign: 'center' }}>
      {coupon.image ? (
        <>
          <h2>{coupon.title}</h2>
          <img
            src={coupon.image}
            alt={coupon.title}
            style={{ width: '300px', borderRadius: '10px', margin: '20px 0' }}
          />
        </>
      ) : (
        <>
          <h2>{coupon.brand} Coupon</h2>
          <p>{coupon.description}</p>
          <p><strong>How to claim:</strong> {coupon.instructions}</p>
        </>
      )}

      <button onClick={() => navigate('/coupons')}>Back to Coupons</button>
    </div>
  );
}
