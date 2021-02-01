import React from "react"
import "../../styles/homePageStyles/examples-styles.css"
import shard1 from "../../images/shard1.png"
import shard2 from "../../images/shard2.png"
import shard3 from "../../images/shard3.png"
import shard4 from "../../images/shard4.png"
import shard5 from "../../images/shard5.png"
import shard6 from "../../images/shard6.png"
import shard7 from "../../images/shard7.png"
import shard8 from "../../images/shard8.png"

const Examples = () => {
  return (
    <div>
      <article className="examples">
        <img src={shard1} className="shard ex__shard1" />
        <img src={shard2} className="shard ex__shard2" />
        <img src={shard3} className="shard ex__shard3" />
        <img src={shard4} className="shard ex__shard4" />
        <img src={shard5} className="shard ex__shard5" />
        <img src={shard6} className="shard ex__shard6" />
        <img src={shard7} className="shard ex__shard7" />
        <img src={shard8} className="shard ex__shard8" />
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
      </article>
    </div>
  )
}

export default Examples
