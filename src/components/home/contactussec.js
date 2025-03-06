import React from "react";
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

  const onSubmit = (data) => {
    console.log("Form Data:", data);
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
                maxLength={51} // Limits input to 50 characters
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
                maxLength={16} // Limits input to 15 digits
              />
              <div className="invalid-feedback">{errors.telephone?.message}</div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Enquiry*"
                {...register("enquiry")}
                className={`form-control ${errors.enquiry ? "is-invalid" : ""}`}
                maxLength={2001} // Limits input to 2000 characters
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
