import React from 'react';
import './Modal.css';

const Modal = ({ src }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={src} alt="modal-image" />
        {/* Include your comment window component here */}
      </div>
    </div>
  );
};

export default Modal;
