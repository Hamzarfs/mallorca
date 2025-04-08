import { useState } from 'react';

export const useBrochureModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormData({ name: '', email: '' });
  };

  return {
    showModal,
    formData,
    submitted,
    handleOpen,
    handleClose,
    setFormData,
    setSubmitted
  };
};