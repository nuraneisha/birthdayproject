import React, { useState } from 'react';
import '../Gift.css';

export default function Gift() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenGift = () => {
        setIsOpened(true);
    };

    return (
        <div className="gift-page">
            <div className="gift-container">
                <h1 className="birthday-message">honestly, u deserve all the good things this world could offer. </h1>

                {!isOpened ? (
                    <div className="gift-box" onClick={handleOpenGift}>
                        <img src="/images/gift.png" alt="Gift Box" className="gift-image" />
                        <p className="tap-to-open">Tap to open your gift</p>
                    </div>
                ) : (
                    <div className="gift-content">
                        <img src="/images/bask.png" alt="Opened Gift" className="gift-image" />
                        <p className="surprise-text">u're 14000km away 🥲. so here's a virtual cheesecake for uu. we'll go get it + strawberry cake once we see eo okay? 💋</p>
                    </div>
                )}
            </div>
        </div>
    );
}
