import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sm-2.css";

function Card({ content, onClick }) {
    return (
        <div className="cards" onClick={onClick}>
            <div className="img-cont" style={{
                backgroundImage: `url(${content.image})`,

              }}>
                
            </div>
            <div className="inner-content">
                <p className="smt-1">{content.subTitle}</p>
                <h2 className="smt-2">{content.title}</h2>
                <p className="smt-3">{content.description}</p>
                <p className="smt-4">{content.additionalInfo}</p>
            </div>
        </div>
    );
}

function Smtwo() {
    const navigate = useNavigate();

    const cardData = [
        {
            subTitle: "Social Media Design | Branding | Engagement | Creativity",
            title: "Creating Scroll-Stopping Social Media Designs, Enhancing Online Presence with Creative Visuals",
            description:"Design Expertise: Crafting engaging posts, banners, and stories tailored to your brand identity. Brand Growth: Helping businesses boost social media engagement and follower retention. ",
            additionalInfo:
                "Custom Solutions: Delivering tailored designs for Instagram, Facebook, LinkedIn, and more.",
            route: "/second-card", // Route for the first card
            image : '../src/assets/MODERN-HOME.jpg',
        },
        {
            subTitle: "Graphic Design | Creative Layouts | Visual Storytelling | Poster design",
            title: "Designing Impactful Visual Experiences. Transforming Ideas into Aesthetically Pleasing Designs",
            description:
                "Creative Expertise: Specializing in graphic design for social media, branding, and digital platforms. User-Centric Approach: Crafting designs that align with brand identity and resonate with target audiences.",
            additionalInfo:
                "Professional Impact: Delivering creative solutions that enhance engagement and brand recognition.",
            route: "/first-card", // Route for the second card
            image : '../src/assets/poster.jpg',
        },
    ];

    return (
        <div className="main-cont">
            <div className="cards-container">
                {cardData.map((content, index) => (
                    <Card
                        key={index}
                        content={content}
                        onClick={() => navigate(content.route)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Smtwo;
