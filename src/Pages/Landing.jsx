import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../CSS/Landing.css";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
    const navigate = useNavigate();
    const [highlightedStep, setHighlightedStep] = useState(0);

    useEffect(() => {
        const path = document.querySelector(".theLine");

        // Get the total length of the path
        const totalLength = path.getTotalLength();

        // Set up the path for the stroke animation (initially hidden)
        gsap.set(path, {
            strokeDasharray: totalLength,
            strokeDashoffset: totalLength,
        });

        // Scroll-triggered animation for the SVG path
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".features", // Section that triggers the path animation
                start: "top center",  // Start the animation when the section hits the center of the viewport
                end: "bottom center", // End the animation when the bottom of the section hits the center
                scrub: true,          // Smooth animation tied to scroll
                toggleActions: "restart none none reverse", // Reverse the animation on scroll up
            },
        });

        // Scroll-based step highlights
        const sections = gsap.utils.toArray(".path-step");
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                onEnter: () => setHighlightedStep(index + 1),
                onLeaveBack: () => setHighlightedStep(index),
            });
        });
    }, []);

    return (
        <div className="landing">
            {/* Header */}
            <header className="header">
                <div className="header-brand">
                    <div className="name"><span className="A">A</span>ccu<span className="T">T</span>ax</div>
                </div>
                <div className="header-buttons">
                    <button onClick={() => navigate('/login')} className="btn btn-secondary">Sign In</button>
                    <button onClick={() => navigate('/register')} className="btn btn-primary">Sign Up</button>
                </div>
            </header>   

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                <h1>AccuTax:Tax returns Process Made Easy</h1>
                <p>Streamline your tax filing process with our user-friendly platform, designed to simplify and guide you through every step for a stress-free tax season.</p>
                    <button onClick={() => navigate('/register')} className="btn btn-primary">Get Started for Free</button>
                </div>
                {/* <img src="images/graphic.svg" alt="tax Graphic" className="hero-image" /> */}
            </section>

            <div className="steps-container">
                {/* SVG Path for the connecting line */}
                <svg width="500" height="1515" viewBox="0 0 50 950" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-container">
                    <path
                        className="theLine"
                        d="M24.0001 0.5V133C24.0001 133 1.00014 129.5 0.500078 154.5C1.68076e-05 179.5 24.0001 179.5 24.0001 179.5V292.5C32.5001 292.833 49.5001 298.3 49.5001 317.5C49.5001 336.7 32.5001 341.833 24.0001 342V454C16.5001 453.833 1.40008 458.4 1.00008 478C0.600078 497.6 16.1667 502.5 24.0001 502.5V614.5C32.6667 615 50.0001 620.6 50.0001 639C50.0001 657.4 32.6667 663.333 24.0001 664V776"
                        stroke="white"
                    />
                </svg>
            </div>

            {/* Features Section with Animated Path */}
            <section className="features">
                <h2>Why AccuTax?</h2>

                <div className={`path-step ${highlightedStep === 1 ? 'highlighted' : ''}`}>
                    <div className="step-number">1</div>
                    <div className="step-info">
                        <h3>Step by Step tax filling process</h3>
                        <p>Our platform breaks down the tax filing process into easy-to-follow steps, guiding you through every detail. From entering your income to claiming deductions, we ensure a smooth and stress-free filing experience.</p>
                    </div>
                </div>
                <div className={`path-step ${highlightedStep === 2 ? 'highlighted' : ''}`}>
                    <div className="step-number">2</div>
                    <div className="step-info">
                        <h3>Income and Deductions Calculator</h3>
                        <p>Accurately calculate your taxable income and eligible deductions with our built-in calculator. It helps you maximize your savings while ensuring full compliance with tax regulations.</p>
                    </div>
                </div>
                <div className={`path-step ${highlightedStep === 3 ? 'highlighted' : ''}`}>
                    <div className="step-number">3</div>
                    <div className="step-info">
                        <h3>Document Upload and Verification</h3>
                        <p>Securely upload all necessary documents for verification to complete your filing with accuracy. Our system checks the documents to ensure everything is in order, reducing errors and delays.</p>
                    </div>
                </div>
                <div className={`path-step ${highlightedStep === 4 ? 'highlighted' : ''}`}>
                    <div className="step-number">4</div>
                    <div className="step-info">
                        <h3>Tax Return Preview and Submission</h3>
                        <p>Review your completed tax return before submission to catch any mistakes. Submit your returns with confidence and ensure accurate filing with our detailed preview feature.</p>
                    </div>
                </div>
               
            </section>

            {/* Call to Action */}
            <section className="call-to-action">
                <h2>Ready to Start Your Journey?</h2>
                <button onClick={() => navigate('/register')} className="btn btn-primary">Join Now</button>
            </section>
        </div>
    );
}

export default Landing;
