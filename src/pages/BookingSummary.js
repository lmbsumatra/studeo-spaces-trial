import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure state or set defaults
  const {
    selectedService = "N/A",
    date = "N/A",
    time = "N/A",
    name = "N/A",
    email = "N/A",
    contactNumber = "N/A",
    paymentMethod = "N/A",
    refNumber = "N/A",
  } = location.state || {};

  // Redirect to booking page if no state is available
  if (!location.state) {
    navigate("/booking");
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="fs-700 ff-serif text-center">Booking Confirmation</h1>
          <hr />
          <h2 className="fs-600 ff-serif text-center">Receipt</h2>
          <p className="text-center">
              <strong>Reference Number:</strong> {refNumber}
            </p>
          <div className="mt-4">
            <h3 className="fs-500 ff-serif">Booking Details</h3>
            <p>
              <strong>Service:</strong> {selectedService}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <hr />
            <h3 className="fs-500 ff-serif">Personal Information</h3>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Contact Number:</strong> {contactNumber}
            </p>
            <hr />
            <h3 className="fs-500 ff-serif">Payment Information</h3>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
          </div>
          <div className="mt-5 text-center">
            <h4 className="fs-500 ff-serif">Thank you for your booking!</h4>
            <p className="fs-400">We look forward to serving you.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSummary;
