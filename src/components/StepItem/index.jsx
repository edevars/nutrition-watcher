import React from 'react';
import PropTypes from 'prop-types';
import './StepItem.css';

const StepItem = ({ children, title, description }) => (
  <div className="step-item">
    <h4>{title}</h4>
    <div>
      {children}
    </div>
    <p className="description">
      {description}
    </p>
  </div>
);

export default StepItem;

StepItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
