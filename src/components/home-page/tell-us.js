import React from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import "../../styles/homePageStyles/tell-us-styles.css"

const TellUs = () => {
  return (
    <div>
      <section className="tell-us bg-red">
        <div className="container">
          <h1 className="clr-black">
            {" "}
            Wait, has this ever happened to you as well?
          </h1>
          <h2>
            What is the most important sentence/act that comes to your mind?
          </h2>
          <CreatePhrase />
        </div>
        <div className="divider bg-red">
          <svg
            className="divider-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              fillOpacity="1"
              d="M0,64L720,192L1440,32L1440,320L720,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default TellUs
