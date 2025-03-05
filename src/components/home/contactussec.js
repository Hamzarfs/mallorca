import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../contactushome.css"; // Unique CSS for styling
import contactuspic from "../../images/contactus.webp";
import MallorcaMap from "./map";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telephone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be a valid number")
    .required("Telephone is required"),
  enquiry: yup.string().required("Enquiry is required"),
});

const ContactUsHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="contactushome container">
      <div className="row align-items-center">
        {/* Map Section */}
        <div className="col-md-6">
          {/* <img
            src={contactuspic}
            alt="Map"
            className="img-fluid"
          /> */}
          <MallorcaMap/>
        </div>

        {/* Form Section */}
        <div className="col-md-6 px-3">
          <h2 className="contact-title">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name*"
                {...register("fullName")}
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
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
              />
              <div className="invalid-feedback">{errors.telephone?.message}</div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Enquiry*"
                {...register("enquiry")}
                className={`form-control ${errors.enquiry ? "is-invalid" : ""}`}
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
