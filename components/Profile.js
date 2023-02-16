import React from 'react';

export default function Profile(){
    return (
        <div className ='profile'>
            <img src = './src/profile_photo.jpeg' width ='317px' />
            <h2>Ashwin Krishnan</h2>
            <h3>Educator</h3>
            <h5>www.ashwinknan.com</h5>
            <div className = "contact-buttons">
                <a href="mailto:youremail@example.com">
                    <button className="email-button">
                        <i className="fas fa-envelope"></i> Email
                    </button>
                </a>
               
                <a href="https://www.linkedin.com/">
                    <button className="linkedin-button">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </button>
                </a>
             
                
            </div>
            
        </div>
    )
}