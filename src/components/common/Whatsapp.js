import React from 'react';
import '../../WhatsAppButton.css'; // Create this CSS file for styling

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/447876740598" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with your WhatsApp icon
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;