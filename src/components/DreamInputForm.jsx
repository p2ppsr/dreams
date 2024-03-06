import React, { useState } from 'react';

const DreamInputForm = ({ onSubmitDream }) => {
    const [dreamDescription, setDreamDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitDream(dreamDescription); // This now sends the dream text back up to App.js
    };

    return (
        <div style={styles.container}>
            <h2>Describe Your Dream</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    style={styles.textarea}
                    value={dreamDescription}
                    onChange={(e) => setDreamDescription(e.target.value)}
                    placeholder="Enter your dream details here..."
                    required
                />
                <button type="submit" style={styles.button}>Analyze Dream</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    textarea: {
        width: '100%',
        height: '150px',
        margin: '10px 0',
        padding: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default DreamInputForm;
