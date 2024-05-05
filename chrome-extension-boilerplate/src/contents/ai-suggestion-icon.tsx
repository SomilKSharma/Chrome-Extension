import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoWatchOverlayAnchor
} from "plasmo"
import { useState } from "react"

import aiSuggestion from "~/assets/aiSuggestion.svg"
import sparkle from "~/assets/sparkle.svg"
import SuggestionModal from "~features/SuggestionModal"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
  updatePosition
) => {
  const interval = setInterval(() => {
    updatePosition()
  }, 20)

  return () => clearInterval(interval)
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(".msg-form__msg-content-container--scrollable")

const PlasmoPricingExtra = () => {
  const [displayModal, setDisplayModal] = useState(false)
  function toggleModal(e) {
    if (e.target.classList.contains("toggle")) {
      setDisplayModal((displayModal) => !displayModal)
    }
  }
  return (
    <>
      {displayModal ? <SuggestionModal toggleModal={toggleModal} /> : <></>}
      <span
        className="toggle"
        style={{
          position: "absolute",
          background: "white",
          borderRadius: "10px",
          padding: "5px",
          cursor: "pointer",
          left: "380px",
          top: "70px"
        }}
        onClick={toggleModal}>
        <img
          className="toggle"
          style={{ height: "16px", width: "16px" }}
          src={String(displayModal ? sparkle : aiSuggestion)}
          alt="My Image"
        />
      </span>
    </>
  )
}

export default PlasmoPricingExtra
