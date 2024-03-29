import { FormEvent, useState } from 'react'
import './DreamInputForm.scss'
import React from "react"

interface DreamInputFormProps {
  onSubmitDream: (dreamDescription: string) => void
}

const DreamInputForm = ({ onSubmitDream }: DreamInputFormProps) => {
  const [dreamDescription, setDreamDescription] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmitDream(dreamDescription)
  }

  return (
    <div className="container">
      <div className="zoomHeader">
        {'Describe Your Dream'.split('').map((char, index) =>
          char === ' ' ? (
            <span key={index} className="space">
              {' '}
            </span>
          ) : (
            <span key={index} className={`zoom-text2-${index + 1}`}>
              {char}
            </span>
          )
        )}
      </div>
      <form onSubmit={handleSubmit} aria-label="Dream Input Form">
        <textarea
          value={dreamDescription}
          onChange={(e) => setDreamDescription(e.target.value)}
          placeholder="Enter your dream details here..."
          required
          aria-label="Dream Description"
        />
        <button type="submit" className="centerBlock">
          Analyze Dream
        </button>
      </form>
    </div>
  )
}

export default DreamInputForm
