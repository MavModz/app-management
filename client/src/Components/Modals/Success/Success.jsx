import React from 'react'
import './sucess.css';

function Success({ show, onClose }) {
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Success!</h2>
                <p>Your form was submitted successfully.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Success