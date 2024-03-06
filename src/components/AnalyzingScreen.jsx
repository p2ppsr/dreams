import React, { useEffect } from 'react';
import checkForMetaNetClient from '../checkForMetaNetClient';
import '../spinner.css'
import PacketPay from '@packetpay/js'

const baseUrl = window.location.href.indexOf('local') !== -1 ? 'http://localhost:8080' : 'https://dreams-backend.babbage.systems'

const AnalyzingScreen = ({ dreamText, onAnalysisComplete, onMetaNetClientNeeded }) => {
    useEffect(() => {
        (async () => {
            const installed = await checkForMetaNetClient()
            if (installed === 1) {
                try {
                    const result = await PacketPay(`${baseUrl}/analyze`, {
                        method: 'POST',
                        body: JSON.stringify({
                            dreamText
                        })
                    })
                    const parsedBody = JSON.parse(Buffer.from(result.body).toString('utf8'))
                    const analysisResult = parsedBody.analysis
                    if (analysisResult.length < 2) {
                        throw new Error('No meaningful analysis provided by server.')
                    }
                    onAnalysisComplete(analysisResult); // Pass the analysis result back to App.js
                } catch (e) {
                    window.alert(`Unfortunately, we could not analyze your dream:\n\n${e.message}\n\nPlease email this error to support@projectbabbage.com. Sorry about that!`)
                }
            } else {
                onMetaNetClientNeeded()
            }
        })()
    }, [dreamText])

    return (
        <div style={styles.container}>
            <h2>Analyzing Your Dream...</h2>
            <div className="spinner"></div> {/* This could be replaced with a more complex animation */}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        maxWidth: '600px',
        margin: '0 auto',
    }
};

export default AnalyzingScreen;
