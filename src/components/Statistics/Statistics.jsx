import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics() {
    return (
        <div className={styles.statistics}>
            <h2 className={styles.title}>Statistics</h2>
            <p className={styles.statItem}>
                Good <span className={styles.statValue}>{2+2}</span>
            </p>
            <p className={styles.statItem}>
                Neutral <span className={styles.statValue}>{2+2}</span>
            </p>
            <p className={styles.statItem}>
                Bad <span className={styles.statValue}>{2+2}</span>
            </p>
            <p className={styles.statItem}>
                Total <span className={styles.statValue}>{2+2}</span>
            </p>
            <p className={styles.statItem}>
                Positive Feedback <span className={styles.statValue}>{2+2}</span>
            </p>    
        </div>
    )
}

export default Statistics;