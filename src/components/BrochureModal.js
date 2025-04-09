import React, { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const BrochureModal = ({ show, onHide, formData, setFormData, submitted, setSubmitted }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://www.mallorcaweddingsandevents.com/php_mailer/send-brochure.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send brochure');
      }
  
      setSubmitted(true);
      setTimeout(() => {
        onHide();
        setSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#4E321A', color: '#F3EBE0' }}>
        <Modal.Title>Download Wedding Brochure</Modal.Title>
      </Modal.Header>
      
      <Modal.Body style={{ backgroundColor: '#F3EBE0' }}>
        {!submitted ? (
          <>
            {submitError && (
              <div className="alert alert-danger mb-3" role="alert">
                {submitError}
              </div>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button 
                  variant="primary" 
                  type="submit" 
                  style={{ backgroundColor: '#4E321A', border: 'none' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Brochure'
                  )}
                </Button>
              </div>
            </Form>
          </>
        ) : (
          <div className="text-center">
            <FaCheckCircle className="text-success mb-2" style={{ fontSize: '2.5rem' }} />
            <h5>Thank you, {formData.name}!</h5>
            <p>Your brochure is being sent to {formData.email}</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BrochureModal;