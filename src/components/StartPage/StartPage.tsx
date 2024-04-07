import { useEffect } from "react"

import babbageLogo from "../../assets/babbageLogo.webp"
import "./StartPage.scss"
import React from "react"
import { FaGithub } from "react-icons/fa"

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
        <span className="zoom-text-6">s</span>
      </h1>
      <p>Discover the hidden meanings behind your dreams.</p>
      <button
        className="centerBlock"
        onClick={onGetStarted}
        style={{ marginTop: "2rem" }}
      >
        Enter My Dream
      </button>
      <div className="githubContainer">
        <FaGithub
          color="black"
          size={50}
          onClick={() => {
            var link = document.createElement("a")
            link.href = "https://github.com/p2ppsr/dreams"
            link.target = "_blank"
            link.click()
          }}
        />
      </div>
    </div>
  )
}

export default StartPage
