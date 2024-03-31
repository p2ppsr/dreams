import { useEffect } from 'react'

import babbageLogo from '../../assets/babbageLogo.webp'
import './StartPage.scss'
import React from "react"

const StartPage = ({ onGetStarted }: any) => {

  return (
    <div>
      <img src={babbageLogo} width={300} className="centerBlock" />
      <h1 className="animatedHeader">
        <span className="zoom-text-1">D</span>
        <span className="zoom-text-2">r</span>
        <span className="zoom-text-3">e</span>
        <span className="zoom-text-4">a</span>
        <span className="zoom-text-5">m</span>
        <span className="zoom-text-5">s</span>
      </h1>
      <p>Discover the hidden meanings behind your dreams.</p>
      <button className="centerBlock" onClick={onGetStarted} style={{ marginTop: '2rem' }}>
        Get Started
      </button>
    </div>
  )
}

export default StartPage
