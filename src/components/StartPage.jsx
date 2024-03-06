import React from 'react';

const StartPage = ({ onGetStarted }) => {
    return (
        <div style={styles.container}>
            <h1>Welcome to Dream Analyzer!</h1>
            <p>Discover the hidden meanings behind your dreams.</p>
            <button style={styles.button} onClick={onGetStarted}>Get Started</button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default StartPage;
