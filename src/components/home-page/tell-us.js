import React from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import "../../styles/homePageStyles/tell-us-styles.css"

const TellUs = () => {
  return (
    <div>
      <section>
        <div class="container">
          <img
            src={redBgShape}
            class="redBgShape"
            alt="Red shad as a background"
          />
          <h1 class="clr-black">
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
