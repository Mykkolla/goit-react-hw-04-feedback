import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './NotificationMessage/NotificationMessage';

export class FeedBackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleGoodFeedback = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutralFeedback = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBadFeedback = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  // handleLeaveFeedback = option => {
  //   switch (option) {
  //     case 'good':
  //       this.setState(prevState => ({
  //         good: prevState.good + 1,
  //       }));
  //       break;
  //     case 'neutral':
  //       this.setState(prevState => ({
  //         neutral: prevState.neutral + 1,
  //       }));
  //       break;
  //     case 'bad':
  //       this.setState(prevState => ({
  //         bad: prevState.bad + 1,
  //       }));
  //       break;
  //     default:
  //       return;
  //   }
  // };
  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    console.log(options);

    return (
      <Section title="Please live feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
