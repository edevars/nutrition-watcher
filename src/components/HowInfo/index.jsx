import React from 'react';
import StepItem from '../StepItem';
import './HowInfo.css';

const HowInfo = () => (
  <section className="how-section">
    <div className="divider" />
    <h2 className="how-title">How Works?</h2>
    <div className="steps-container">
      <StepItem
        title="1. Take your weight"
        description="Every morning when wake up you should take your weight."
      >
        <i className="las la-weight" />
      </StepItem>
      <StepItem
        title="2. Save your progess"
        description="Register your weight and other data in the interface of Nutrition Watcher."
      >
        <i className="las la-edit" />
      </StepItem>
      <StepItem
        title="3. See the results!"
        description="Try to have a healthy diet and do excercise everyday and see your progress in our dashboard."
      >
        <i className="las la-poll" />
      </StepItem>
    </div>
  </section>
);

export default HowInfo;
