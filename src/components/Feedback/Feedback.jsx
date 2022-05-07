import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

function Feedback() {
    return (
        <form className={styles.form}>
            <h2>Please leave Feedback</h2>
            <button type='button' className={styles.button}>
                Good
            </button>
            <button type='button' className={styles.button}>
                Neutral
            </button>
            <button type='button' className={styles.button}>
                Bad
            </button>
        </form>
    )
}

export default Feedback;