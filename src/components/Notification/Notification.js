import React from "react";
import "./Notification.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className="Feedback__Statistics">
    <span className="Feedback">{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
