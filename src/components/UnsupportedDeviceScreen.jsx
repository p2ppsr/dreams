import React from 'react';

const UnsupportedDeviceScreen = () => {
    return (
        <div style={styles.container}>
            <h1>This App Only Works on Computers!</h1>
            <p>Please visit this site on a Windows, macOS, or Linux computer to use the app.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        maxWidth: '600px',
        margin: '0 auto',
        fontSize: '18px',
    }
};

export default UnsupportedDeviceScreen;
