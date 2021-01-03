import React from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import "../../styles/homePageStyles/tell-us-styles.css"

const TellUs = () => {
  return (
    <div>
      <section>
        <div className="container">
          <img
            src={redBgShape}
            className="redBgShape"
            alt="Red shad as a background"
          />
          <h1 className="clr-black">
            {" "}
            Wait, has this ever happened to you as well?
          </h1>
          <CreatePhrase />
        </div>
      </section>
    </div>
  )
}

export default TellUs
