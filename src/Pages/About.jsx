import React from 'react';
import '../CSS/AboutUs.css'; // Importing the CSS file

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Welcome to <span className="brand-name">AccuTax</span>, your trusted partner in simplifying the income tax filing process.</p>
            </div>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p>Our mission is to provide an efficient and hassle-free tax filing experience for everyone. Whether you're a salaried individual, self-employed professional, small business owner, or a first-time filer, our platform guides you through every step of the process—ensuring accuracy, transparency, and compliance with tax regulations.</p>
            </section>

            <section className="about-section">
                <h2>Who We Serve</h2>
                <ul>
                    <li><strong>Salaried Employees:</strong> Helping individuals easily compute income and deductions to file their returns seamlessly.</li>
                    <li><strong>Self-Employed Professionals and Freelancers:</strong> Offering tailored tools to calculate income, expenses, and tax liabilities with precision.</li>
                    <li><strong>Small Business Owners:</strong> Supporting business owners in managing their finances and submitting tax returns with ease.</li>
                    <li><strong>First-Time Filers:</strong> Providing step-by-step guidance to make the tax filing process simple and approachable.</li>
                    <li><strong>People of All Abilities:</strong> Prioritizing accessibility to ensure everyone can file their taxes independently.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Key Features of Our Platform</h2>
                <ul>
                    <li><strong>Step-by-Step Tax Filing Process:</strong> Easy-to-follow steps for navigating income reporting and deductions.</li>
                    <li><strong>Income and Deductions Calculator:</strong> Accurately compute taxable income and claim eligible deductions.</li>
                    <li><strong>Document Upload and Verification:</strong> Securely upload necessary documents for compliance.</li>
                    <li><strong>Tax Return Preview and Submission:</strong> Review and submit tax returns accurately.</li>
                    <li><strong>Tax Refund and Payment Notifications:</strong> Get real-time updates on refunds or payments due.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Why Choose Us?</h2>
                <p>At <span className="brand-name">AccuTax</span>, we combine simplicity with powerful tools to make tax filing stress-free. Our platform is designed with your needs in mind, offering:</p>
                <ul>
                    <li><strong>User-Centric Design:</strong> Prioritizing ease of use for users of all experience levels.</li>
                    <li><strong>Accessibility:</strong> Features that support people with disabilities.</li>
                    <li><strong>Accuracy and Compliance:</strong> Built-in checks and updates on tax regulations for confident filing.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Join Us Today</h2>
                <p>Ready to experience stress-free tax filing? <span className="brand-name">AccuTax</span> is here to help you every step of the way. Sign up today and simplify your tax filing process with ease and confidence.</p>
            </section>
        </div>
    );
};

export default AboutUs;