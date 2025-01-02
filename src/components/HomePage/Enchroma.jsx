import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import './Enchroma.css';

function Enchroma({ title, description, buttonText, imageSrc, dappa1, navigateTo }) {
    const imageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const image = imageRef.current;
            if (image) {
                const scrollY = window.scrollY;
                image.style.transform = `translateY(${scrollY * -0.01}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="lama-22">
            <div className="ForEnchromacontent">
                <div className="lama-content-2">
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

            <div className="Enchroma-half-width">
                <div className="image-cont-2">
                    <img ref={imageRef} className="dappa-2-img" src={dappa1} alt="" />
                </div>
            </div>
        </div>
    );
}

Enchroma.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    dappa1: PropTypes.string.isRequired,
    navigateTo: PropTypes.string.isRequired,
};

export default Enchroma;
