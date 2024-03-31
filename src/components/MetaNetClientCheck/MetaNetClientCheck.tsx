import React, { useEffect, useState } from 'react';
import checkForMetaNetClient from "../../utils/checkForMetaNetClient";

const MetaNetClientCheck = ({ onClientDetected }: any) => {
    const [waitingForClient, setWaitingForClient] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const clientDetected = await checkForMetaNetClient();
            if (clientDetected === 1 || 0) {
                clearInterval(intervalId);
                setWaitingForClient(false);
                onClientDetected(); // Callback to notify App component that MetaNet Client is detected
            } else if (clientDetected === -1) {
                clearInterval(intervalId);
                window.alert('Non-mainnet client detected. Please use a Mainline / mainnet MetaNet Client.')
            }
        }, 1000); // Check every 1 second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [onClientDetected]);

    const handleDownloadClick = () => {
        window.open('https://projectbabbage.com/metanet-client', '_blank')
    };

    const handleCheckNow = async () => {
        const clientDetected = await checkForMetaNetClient();
        if (clientDetected === 1 || 0) {
            setWaitingForClient(false);
            onClientDetected();
        } else if (clientDetected === -1) {
            window.alert('Non-mainnet client detected. Please use a Mainline / mainnet MetaNet Client.')
        } else {
            window.alert('No MetaNet Client is detected. Tips:\n- Avoid using Safari\n- Take down Brave Shields\n- Email support@projectbabbage.com')
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Your Analysis is Ready!</h2>
            <p>To view your analysis, please ensure the MetaNet Client is installed on your computer.</p>
            <button style={styles.button} onClick={handleDownloadClick}>Download MetaNet Client</button>
            <br />
            <button style={styles.button} onClick={handleCheckNow}>Check for MetaNet Client</button>
            {waitingForClient && <p>Waiting for MetaNet Client...</p>}
        </div>
    );
};

const styles = {
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default MetaNetClientCheck;
