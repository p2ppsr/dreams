import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share'

import './AnalysisResult.scss'
import React from "react"

const AnalysisResult = ({ dreamText, analysisResult, onAnalyzeNewDream }: any) => {
  const shareUrl = window.location.href // The URL to share
  const title = `Discover the hidden meanings behind your dreams with Dream Analyzer!\n\nMy dream:\n\n${dreamText}\m\nDream Analysis:\n\n${analysisResult}`

  return (
    <div className="container">
      <h1>Your Analysis is Complete!</h1>
      <p className="resultText">{analysisResult}</p>
      <div className="centerBlock" style={{ marginBlock: '1rem' }}>
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
      <button onClick={onAnalyzeNewDream} className="centerBlock">
        Analyze New Dream
      </button>
    </div>
  )
}

export default AnalysisResult
