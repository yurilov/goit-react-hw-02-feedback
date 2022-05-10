import React from "react";
import propTypes from "prop-types";

const Notification = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

Notification.propTypes = {
  title: propTypes.string.isRequired,
};

export default Notification;
