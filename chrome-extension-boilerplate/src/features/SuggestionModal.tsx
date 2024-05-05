import React, { useState } from "react"

import insert from "~/assets/insert.svg"
import regen from "~/assets/regen.svg"
import send from "~/assets/send.svg"

const SuggestionModal = ({ toggleModal }) => {
  const [text, setText] = useState("")
  const [generated, setGenerated] = useState(false)

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    setGenerated(true)
  }

  const insertText = () => {
    const messageDisplay = document.querySelector(".msg-form__contenteditable")
    const placeholderText = document.querySelector(
      ".msg-form__placeholder--redesign"
    )
    messageDisplay.innerHTML = `<p>Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.</p>`
    placeholderText.classList.remove("msg-form__placeholder")
  }

  return (
    <div
      className="toggle"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={toggleModal}>
      <div
        style={{
          width: 470,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
          }}>
          {generated && (
            <div
              style={{
                backgroundColor: "#DFE1E7",
                fontSize: "14px",
                color: "#666d80",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px"
              }}>
              {text}
            </div>
          )}
          {generated && (
            <div
              style={{
                backgroundColor: "#DBEAFE",
                fontSize: "14px",
                color: "#666d80",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px"
              }}>
              Thank you for the opportunity! If you have any more questions or
              if there's anything else I can help you with, feel free to ask.
            </div>
          )}
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            value={text}
            placeholder="Your prompt"
            onChange={handleInputChange}
            style={{
              width: "100%",
              marginBottom: 10,
              padding: 8,

              borderRadius: 5,
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={handleSubmit}
            style={{
              marginTop: 10,
              padding: "10px 20px",
              backgroundColor: "#3B82F6",
              color: "white",
              borderRadius: 5,
              margin: "5px",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
            <img
              style={{ height: "16px", width: "16px" }}
              src={generated ? String(regen) : String(send)}
              alt="send-icon"
            />
            <span style={{ marginLeft: "5px" }}>
              {generated ? `Regenerate` : `Generate`}
            </span>
          </button>
          {generated && (
            <button
              onClick={insertText}
              style={{
                marginTop: 10,
                padding: "10px 20px",

                borderRadius: 5,
                margin: "5px",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>
              <img
                style={{ height: "16px", width: "16px" }}
                src={String(insert)}
                alt="insert-icon"
              />
              <span style={{ marginLeft: "5px", color: "#666d80" }}>
                Insert
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SuggestionModal
