import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaCheckCircle } from "react-icons/fa";
import "../../contactushome.css";
import MallorcaMap from "./map";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Full Name can only contain alphabets and spaces")
    .max(50, "Full Name cannot exceed 50 characters")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{0,15}$/, "Please enter valid phone number (e.g. +34123456789)")
    .required("Phone number is required"),
  message: yup
    .string()
    .max(2000, "Message cannot exceed 2000 characters")
    .required("Message is required"),
});

const ContactUsHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dropdownRef = useRef(null);
  
  const services = ["Weddings", "Catering", "Private Chef", "Corporate Events", "Private Events"];
  const phoneValue = watch("phone");

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) 
        ? prev.filter((s) => s !== service) 
        : [...prev, service]
    );
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPhone = (value) => {
    // Remove all non-digit and non-plus characters
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // Ensure only one plus at the start
    if (cleaned.includes('+')) {
      return '+' + cleaned.replace(/\+/g, '');
    }
    return cleaned;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setSubmitError("");
    try {
      const formData = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        message: data.message,
        services: selectedServices
      };

      const response = await fetch("https://www.mallorcaweddingsandevents.com/php_mailer/index.php", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Server responded with an error");
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      reset();
      setSelectedServices([]);
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    } catch (error) {
      setSubmitError(error.message || "An error occurred while sending your message");
    }
  };

  return (
    <section className="contactushome container">
      {showThankYou && (
        <div className="thank-you-message">
          <FaCheckCircle className="check-icon" />
          <h3>Thank you for your enquiry!</h3>
          <p>We will be in touch very shortly to assist</p>
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-md-6">
          <MallorcaMap />
        </div>

        <div className="col-md-6">
          <h2 className="contact-title">Contact Us</h2>
          {submitError && (
            <div className="alert alert-danger" role="alert">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
            <div className="form-group">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name*"
                {...register("fullname")}
                className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
                maxLength={50}
              />
              <div className="invalid-feedback">{errors.fullname?.message}</div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone* (e.g. +34123456789)"
                {...register("phone")}
                onChange={handlePhoneChange}
                value={phoneValue || ''}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                maxLength={16}
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </div>

            <div className="form-group position-relative" ref={dropdownRef}>
              <button
                type="button"
                className="btn btn-outline-dark w-100 text-left dropdown-toggle"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                {selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu show w-100 p-3">
                  {services.map((service) => (
                    <div key={service} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`service-${service}`}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        value={service}
                      />
                      <label className="form-check-label" htmlFor={`service-${service}`}>
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message*"
                {...register("message")}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows={5}
                maxLength={2000}
              />
              <div className="invalid-feedback">{errors.message?.message}</div>
            </div>

            <button 
              type="submit" 
              className="btn btn-outline-dark contact-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHome;