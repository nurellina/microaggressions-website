import React from "react"
import CreatePhrase from "../create-phrase"
import redBgShape from "../../images/redBgShape.svg"
import "../../styles/homePageStyles/tell-us-styles.css"

const TellUs = () => {
  return (
    <div>
      <section className="tell-us">
        <div className="container">
          <h1 className="clr-black">
            {" "}
            Wait, has this ever happened to you as well?
          </h1>
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
              fill="#000"
              fill-opacity="1"
              d="M0,256L288,256L576,64L864,160L1152,288L1440,288L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default TellUs
