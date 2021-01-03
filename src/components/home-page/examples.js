import React from "react"
import "../../styles/homePageStyles/examples-styles.css"

const Examples = () => {
  return (
    <div>
      <article className="examples">
        <div className="container">
          <h1> Examples of microagressions </h1>
          <p className="clr-salmon">
            {" "}
            Prof. Derald W. Sue demonstrates an example of microaggressions
            towards Asian Americans and Latin Americans, who are frequently
            complimented for ‘speaking good English,’“
          </p>
          <p className="clr-salmon">
            {" "}
            But there is a hidden communication the target experiences: ‘You
            speak excellent English’ to the target says 'You are not a true
            American. You're a perpetual alien in your own country'”
          </p>
        </div>
        <div className="green-container"></div>
      </article>
    </div>
  )
}

export default Examples
