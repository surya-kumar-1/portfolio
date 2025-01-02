import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lama.css';

function Lama({ title, description, buttonText, imageSrc, dappa1, navigateTo }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="lama">
            <div className="half-width">
                <div>
                    <div className="image-cont">
                        <img
                            className="dappa-1-img"
                            src={dappa1}
                            alt=""
                            style={{
                                transform: `translateY(${scrollPosition * 0}px)`,
                                transition: 'transform 0.2s ease-out',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="Forlamacontent">
                <div className="lama-content">
                    <div className="text-Lamaai">
                        <h1>{title}</h1>
                    </div>
                    <div className="Lama-paragraph">
                        <p>{description}</p>
                    </div>
                    <button className="lama-btn" onClick={() => navigate(navigateTo)}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Lama;
