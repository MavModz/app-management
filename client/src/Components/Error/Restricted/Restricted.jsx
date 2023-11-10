import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./restricted.css"

function Restricted() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        navigate('/');
    };


    return (
        <>
            <div className="restricted-container">
                <span className="restricted-centering">
                    <form className="restricted-my-form">
                        <span className="restricted-login-welcome-row">
                            <h1>Unauthorized</h1>
                            <p>The Page you are trying to access is restricted. Please login and try again</p>
                        </span>
                        <section className="restricted-error-container">
                            <span>4</span>
                            <span><span className="restricted-screen-reader-text">0</span></span>
                            <span>3</span>
                        </section>
                        <div className="restricted-Verify_Otp">
                            <button type="submit" className="restricted-my-form__button" onClick={handleSubmit}>Login</button>
                        </div>
                    </form>
                </span>
            </div>
        </>
    )
}

export default Restricted