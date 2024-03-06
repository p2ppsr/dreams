import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
} from 'next-share';

const AnalysisResult = ({ dreamText, analysisResult, onAnalyzeNewDream }) => {
    const shareUrl = window.location.href; // The URL to share
    const title = `Discover the hidden meanings behind your dreams with Dream Analyzer!\n\nMy dream:\n\n${dreamText}\m\nDream Analysis:\n\n${analysisResult}`

    return (
        <div style={styles.container}>
            <h2>Your Analysis is Complete!</h2>
            <p>{analysisResult}</p>
            <div style={styles.shareContainer}>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
            <button style={styles.button} onClick={onAnalyzeNewDream}>Analyze New Dream</button>
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
    shareContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default AnalysisResult;
