import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage() {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 500); // Duration of the animation (matches the CSS `@keyframes` duration)

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <>
            <div className="LandingPort">
                <h1>
                    Portfoli
                    <span className="custom-o">
                        <CustomToggle animationComplete={animationComplete} />
                    </span>
                    <span className="n">n</span>
                </h1>
                <div className='animation-images'>
                    <div className='ani-image-1'>
                        <img src="../src/assets/img-3.png" alt="" />
                    </div>
                    <div className='ani-image-2'>
                        <img src="../src/assets/img-4.png" alt="" />
                    </div>
                    <div className='ani-image-3'>
                        <img src="../src/assets/img-5.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

function CustomToggle({ animationComplete }) {
    return (
        <svg
            className={`toggle-svg ${animationComplete ? 'stop-animation' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
        >
            <rect
                x="5"
                y="5"
                rx="20"
                ry="20"
                width="90"
                height="40"
                fill="#FFFFFF"
                stroke="url(#custom-gradient)" // Updated gradient reference
                strokeWidth="8"
            />
            <circle
                cx={animationComplete ? 75 : 25} // Final position after animation
                cy="25"
                r="10"
                fill="url(#custom-gradient)" // Updated gradient reference
            />
            <defs>
                {/* Define the custom gradient */}
                <linearGradient id="custom-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#314756" />
                    <stop offset="100%" stopColor="#b1ccde" />
                </linearGradient>
            </defs>
        </svg>
    );

}

export default LandingPage;
