import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li>GOOD: {good}</li>
      <li>NEUTRAL: {neutral}</li>
      <li>BAD: {bad}</li>
      <li>TOTAL: {total} </li>
      <li>POSITIVE FEEDBACK: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
