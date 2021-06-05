import React, { useState } from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import "../../styles/homePageStyles/tell-us-styles.css"

const TellUs = () => {
  const [phrase, setPhrase] = useState("")
  const [done, setDone] = useState(false)

  const handleDone = newState => {
    setDone(newState)
  }
  const handleChange = newPhrase => {
    setPhrase(newPhrase)
  }
  return (
    <div>
      <section className="tell-us bg-red">
        <div className="container">
          <h1 className="clr-black">
            {" "}
            Wait, has this ever happened to you as well?
          </h1>
          <div className="center-block">
            {done && (
              <div>
                <p>Thank you! This is the microaggression you shared:</p>
                <p className="ff-accent">"{phrase}"</p>
                <p>
                  Now you will be able to see it above together with other
                  phrases/actions.
                </p>
              </div>
            )}
            <div>
              <CreatePhrase
                phrase={phrase}
                onDone={handleDone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="divider">
          <svg
            className="divider-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              fillOpacity="1"
              d="M0,192L480,224L960,128L1440,192L1440,320L960,320L480,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default TellUs
