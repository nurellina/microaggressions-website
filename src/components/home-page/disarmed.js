/* SECTION: how can microagressions be disarmed? */
import React from "react"
import "../../styles/homePageStyles/disarmed-styles.css"
import greenCircle from "../../images/greenCircle.svg"

const Disarmed = () => {
  return (
    <div>
      <article className="disarmed">
        <div className="shapeTextWrapper">
          <img src={greenCircle} alt="green circle" className="shapeImage" />
          <p className="shapeText ff-accent">
            {" "}
            We are all prone to mistakes and it's not necessarily that you're a
            “bad” person if you commit a microaggression, but try to be more
            aware of your implicit biases and their effect on your behaviour
          </p>
        </div>
        <div className="container">
          <h1 className="clr-black">How can microagressions be disarmed</h1>
          {/* your code here */}
        </div>
        <div className="divide">
          <svg
            className="divider-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              fill-opacity="1"
              d="M0,160L240,32L480,96L720,64L960,256L1200,256L1440,32L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>
        </div>
      </article>
    </div>
  )
}

export default Disarmed
