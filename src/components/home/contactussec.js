import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../contactushome.css"; // Unique CSS for styling
import MallorcaMap from "./map";

// Validation schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Full Name can only contain alphabets and spaces")
    .max(50, "Full Name cannot exceed 50 characters")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  telephone: yup
    .string()
    .matches(/^\d{10,15}$/, "Telephone must be between 10 to 15 digits")
    .required("Telephone is required"),
  enquiry: yup
    .string()
    .max(2000, "Enquiry cannot exceed 2000 characters")
    .required("Enquiry is required"),
});

const ContactUsHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const services = ["Weddings", "Catering", "Private Chef", "Corporate Events", "Private Events"];

  // Handle checkbox selection
  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Toggle dropdown manually
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, selectedServices });
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <section className="contactushome container">
      <div className="row align-items-center">
        {/* Map Section */}
        <div className="col-md-6">
          <MallorcaMap />
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h2 className="contact-title">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name*"
                {...register("fullName")}
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                maxLength={51}
              />
              <div className="invalid-feedback">{errors.fullName?.message}</div>
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Telephone*"
                {...register("telephone")}
                className={`form-control ${errors.telephone ? "is-invalid" : ""}`}
                maxLength={16}
              />
              <div className="invalid-feedback">{errors.telephone?.message}</div>
            </div>

            {/* Services Dropdown with Checkboxes */}
            <div className="form-group position-relative" ref={dropdownRef}>
              <button
                type="button"
                className="btn btn-outline-dark w-100 text-left"
                onClick={toggleDropdown}
              >
                {selectedServices.length > 0 ? selectedServices.join(", ") : "Select Services"}
              </button>

              {dropdownOpen && (
                <ul className="dropdown-menu show w-100 p-3 position-absolute">
                  {services.map((service) => (
                    <li key={service} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                      />
                      <label className="form-check-label" htmlFor={service}>
                        {service}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Enquiry*"
                {...register("enquiry")}
                className={`form-control ${errors.enquiry ? "is-invalid" : ""}`}
                maxLength={2001}
              ></textarea>
              <div className="invalid-feedback">{errors.enquiry?.message}</div>
            </div>

            <button type="submit" className="btn btn-outline-dark contact-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHome;
