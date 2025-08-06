import React, { useState } from 'react';
import '../MenuCard.css';

function MenuCard({ title, buttonText, image, link, modalContent }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        console.log("modalContent:", modalContent); // Add this in MenuCard

        if (modalContent) {
            console.log("Opening modal...");
            setShowModal(true);
        } else {
            window.location.href = link; // For cards that navigate to another page
        }
    };

    return (
        <>
            <div className="card">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <button onClick={handleClick}>{buttonText}</button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{title}</h3>
                        <p>{modalContent}</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuCard;
