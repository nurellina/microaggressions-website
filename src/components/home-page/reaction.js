/* SECTION: how can people react who are affected? */

import React from "react"
import "../../styles/homePageStyles/reaction-styles.css"
import blobShape from "../../images/blob-2.svg"
import question from "../../images/isitsomebodywithcapacity.png"
import yes from "../../images/yes_red.png"
import no from "../../images/no_red.png"
const Reaction = () => {
  return (
    <div>
      {" "}
      <article className="reaction bg-salmon">
        <div className="container">
          <h1 className="clr-red">
            {" "}
            How can people who are affected by microaggressions react?{" "}
          </h1>
          <p>
            {" "}
            If you find yourself in a situation in which you are confronted by
            microaggressions, such like a difficult dialogue:
          </p>
          <p className="ff-accent">
            {" "}
            First, think about whether or not it is worth continuing to talk to
            that person
          </p>
          <div>
            <img
              src={question}
              alt="question shard"
              className=" shapeImage shapeQuestion"
            />
          </div>

          <div className="split-r">
            <div className="column-r">
              <div className="shape2">
                <img src={no} alt="no shard" className=" shapeImage" />
              </div>
              <p>
                {" "}
                <br />A lot of times people get into arguments with people they
                don't need to necessarily be emotionally invested in because
                they don't have that sort of relationship.
              </p>
            </div>
            <div className="column-r">
              <div className="shape2">
                <img src={yes} alt="yes shard" className=" shapeImage" />
              </div>
              <p>
                {" "}
                <br />
                If you are close and if you do have a relationship it might be
                important just to say,
                <br />
                'Look I feel like we're both getting really emotionally charged
                right now. I don't feel like I'm able to hear what you are
                saying. I don't feel that you're able to hear what I'm saying.
                <br />
                So maybe we need to table this and talk another time.'
              </p>
            </div>
          </div>
          <p className="ff-accent align-center">
            {" "}
            Or maybe offer to give them something they could read - that could
            be more helpful or effective than a conversation that might just
            turn into yelling and hostality.
          </p>
        </div>
      </article>
    </div>
  )
}

export default Reaction
