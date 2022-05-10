import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {
                options.map((option) => (
                    <button
                        className={styles.btn}
                        key={option}
                        name={option}
                        type="button"
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                ))
            }
        </>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};

export default FeedbackOptions;