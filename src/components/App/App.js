import "../../index.css";
import React from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptionD";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positivePercentage = Math.round(
      good > 0 ? (good / this.countTotalFeedback()) * 100 : 0
    );

    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="Feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};

export default App;
