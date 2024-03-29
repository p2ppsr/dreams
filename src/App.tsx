import { useState } from 'react'
import AnalysisResult from './components/AnalysisResult/AnalysisResult'
import AnalyzingScreen from './components/AnalyzingScreen/AnalyzingScreen'
import DreamInputForm from './components/DreamInputForm/DreamInputForm'
import MetaNetClientCheck from './components/MetaNetClientCheck/MetaNetClientCheck'
import StartPage from './components/StartPage/StartPage'
import UnsupportedDeviceScreen from './components/UnsupportedDeviceScreen/UnsupportedDeviceScreen'

import './App.scss'
import './spinner.css'
import React from "react"

const isSupportedOS = () => {
  const os = navigator.platform.toLowerCase()
  return os.includes('win') || os.includes('mac') || os.includes('linux')
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('start')
  const [dreamText, setDreamText] = useState('')
  const [analysisResult, setAnalysisResult] = useState('')

  const handleGetStarted = () => {
    setCurrentPage('inputForm')
  }

  const handleDreamSubmission = (text: string) => {
    setDreamText(text) // Store the dream text
    setCurrentPage('analyzing')
  }

  const handleAnalysisComplete = (result: any) => {
    setAnalysisResult(result) // Store the analysis result
    setCurrentPage('result')
  }

  const handleAnalyzeNewDream = () => {
    setDreamText('')
    setAnalysisResult('')
    setCurrentPage('inputForm')
  }

  const handleClientDetected = () => {
    setCurrentPage('analyzing')
  }

  const handleMetaNetClientNeeded = () => {
    setCurrentPage('metaNetCheck')
  }

  if (!isSupportedOS()) {
    return <UnsupportedDeviceScreen />
  }

  return (
    <div>
      {currentPage === 'start' && <StartPage onGetStarted={handleGetStarted} />}
      {currentPage === 'inputForm' && <DreamInputForm onSubmitDream={handleDreamSubmission} />}
      {currentPage === 'analyzing' && (
        <AnalyzingScreen
          dreamText={dreamText}
          onAnalysisComplete={handleAnalysisComplete}
          onMetaNetClientNeeded={handleMetaNetClientNeeded}
        />
      )}
      {currentPage === 'result' && (
        <AnalysisResult
          dreamText={dreamText}
          analysisResult={analysisResult}
          onAnalyzeNewDream={handleAnalyzeNewDream}
        />
      )}
      {currentPage === 'metaNetCheck' && (
        <MetaNetClientCheck onClientDetected={handleClientDetected} />
      )}
    </div>
  )
}

export default App
