import PacketPay from '@packetpay/js'
import { useEffect } from 'react'
import checkForMetaNetClient from '../../utils/checkForMetaNetClient'
import React from "react"

const baseUrl =
  window.location.href.indexOf('local') !== -1
    ? 'http://localhost:3001'
    : 'https://dreams-backend.babbage.systems'

const AnalyzingScreen = ({ dreamText, onAnalysisComplete, onMetaNetClientNeeded }: any) => {
  useEffect(() => {
    ; (async () => {
      const userHasMetaNetClient = await checkForMetaNetClient()
      if (userHasMetaNetClient === 1 || 0) {
        try {
          const result = await PacketPay(`${baseUrl}/analyze`, {
            method: 'POST',
            body: JSON.stringify({
              dreamText,
            }),
          })
          const parsedBody = JSON.parse(Buffer.from(result.body).toString('utf8'))
          const analysisResult = parsedBody.analysis
          if (analysisResult.length < 2) {
            throw new Error('No meaningful analysis provided by server.')
          }
          onAnalysisComplete(analysisResult) // Pass the analysis result back to App.js
        } catch (e) {
          window.alert(
            // @ts-ignore
            `Unfortunately, we could not analyze your dream:\n\n${e.message}\n\nPlease email this error to support@projectbabbage.com. Sorry about that!`
          )
        }
      } else {
        onMetaNetClientNeeded()
      }
    })()
  }, [dreamText])

  return (
    <div className="container">
      <h2>Analyzing Your Dream...</h2>
      <div className="spinner"></div> {/* This could be replaced with a more complex animation */}
    </div>
  )
}

export default AnalyzingScreen
