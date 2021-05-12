import React, { useState } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

const ProgramItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li style={{ cursor: "pointer" }} key={item.data.Programpunkt}>
      <figure onClick={() => setIsOpen(true)}>
        <Img fluid={item?.data?.Bild?.localFiles[0].childImageSharp.fluid} />{" "}
      </figure>
      <div className="info" onClick={() => setIsOpen(true)}>
        <strong>{item.data.Programpunkt}</strong>
        <p>{item?.data?.Beskrivning?.substring(0, 25)}...</p>
      </div>
      {isOpen && (
        <React.Fragment>
          <Modal>
            <Close onClick={() => setIsOpen(false)}>Stäng</Close>
            <div className="modal-container">
              <figure>
                <Img
                  fluid={item?.data?.Large?.localFiles[0].childImageSharp.fluid}
                />
              </figure>
              <div className="content">
                <h3>{item.data.Programpunkt}</h3>
                <p>{item.data.Beskrivning}</p>
              </div>
            </div>
          </Modal>
          <Overlay onClick={() => setIsOpen(false)} />
        </React.Fragment>
      )}
    </li>
  )
}

export default ProgramItem

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  background: white;
  z-index: 50;
  border-radius: 5px;
  box-shadow: 0px 10px 10px #00000020;
  .modal-container {
    overflow-y: scroll;
    max-height: 60vh;
    border-radius: 5px;
  }

  figure {
    width: 100% !important;
    height: auto !important;
    border-radius: 0px !important;
    display: block;
  }
  .content {
    padding: 1.5rem 1rem;
    overflow-y: scroll;
    h3 {
      margin-bottom: 1rem;
    }
    p {
      white-space: break-spaces;
    }
  }
`
const Overlay = styled.div`
  position: fixed;
  content: "";
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: #00000090;
  backdrop-filter: blur(10px);
  z-index: 40;
`
const Close = styled.div`
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  position: fixed;
  top: -20px;
  right: 5px;
  z-index: 51;
  border-radius: 9999px;
`
