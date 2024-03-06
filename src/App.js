import React, { useState } from 'react';
import StartPage from './components/StartPage';
import DreamInputForm from './components/DreamInputForm';
import AnalyzingScreen from './components/AnalyzingScreen';
import AnalysisResult from './components/AnalysisResult';
import MetaNetClientCheck from './components/MetaNetClientCheck';
import UnsupportedDeviceScreen from './components/UnsupportedDeviceScreen';

const isSupportedOS = () => {
  const os = navigator.platform.toLowerCase();
  return os.includes('win') || os.includes('mac') || os.includes('linux');
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');
  const [dreamText, setDreamText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleGetStarted = () => {
    setCurrentPage('inputForm');
  };

  const handleDreamSubmission = (text) => {
    setDreamText(text); // Store the dream text
    setCurrentPage('analyzing');
  };

  const handleAnalysisComplete = (result) => {
    setAnalysisResult(result); // Store the analysis result
    setCurrentPage('result');
  };

  const handleAnalyzeNewDream = () => {
    setDreamText('')
    setAnalysisResult('')
    setCurrentPage('inputForm')
  }

  const handleClientDetected = () => {
    setCurrentPage('analyzing');
  };

  const handleMetaNetClientNeeded = () => {
    setCurrentPage('metaNetCheck');
  }

  if (!isSupportedOS()) {
    return <UnsupportedDeviceScreen />
  }

  return (
    <div>
      {currentPage === 'start' && <StartPage onGetStarted={handleGetStarted} />}
      {currentPage === 'inputForm' && <DreamInputForm onSubmitDream={handleDreamSubmission} />}
      {currentPage === 'analyzing' && <AnalyzingScreen dreamText={dreamText} onAnalysisComplete={handleAnalysisComplete} onMetaNetClientNeeded={handleMetaNetClientNeeded} />}
      {currentPage === 'result' && <AnalysisResult dreamText={dreamText} analysisResult={analysisResult} onAnalyzeNewDream={handleAnalyzeNewDream} />}
      {currentPage === 'metaNetCheck' && <MetaNetClientCheck onClientDetected={handleClientDetected} />}
    </div>
  );
}

export default App;
