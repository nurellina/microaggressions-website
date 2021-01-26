/* SECTION: what are microagression? */

import React from "react"
import "../../styles/homePageStyles/definition-styles.css"
import headingBox from "../../images/blackBgShape1.svg"
import paragraphBox1 from "../../images/blackBgShape2.svg"
import paragraphBox2 from "../../images/blackBgShape3.svg"
const Definition = () => {
  return (
    <div>
      <article>
        <div className="definition">
        <div>
            <div className="def1 shapeTextWrapper">
            <img src={headingBox} alt="black background" className="shapeImage shapeImgTop"/>
              <h1 className="salmon-heading clr-salmon heading">
                {" "}
                But, what are microagressions?{" "}
              </h1>
              <p className="clr-white shapeText2" id="shapeTextTop">
                {" "}
                A microaggression is a <span className="ff-accent">
                  comment
                </span>{" "}
                or gesture (whether made intentionally or not) <br />
                that <span className="ff-accent">feeds into stereotypes</span> or
                negative assumptions created around oppressed
                <br /> or <span className="ff-accent">
                  marginalized groups
                </span>{" "}
                of people.
              </p>
            </div>
          </div>
          <div className="def2 shapeTextWrapper">
              <img src={paragraphBox1} alt="black background" className=" shapeImage shapeImg1"/>
              <p className="clr-white shapeText2" id="longTxt">
                It can also be defined as the everyday, subtle, intentional — and
                oftentimes unintentional — interactions or behaviors that
                communicate some sort of bias toward historically marginalized
                groups.
              </p>
              <p className="clr-white shapeText2" id="shortTxt">
              {" "}
              The term was coined by Harvard psychiatrist{" "}
              <span className="ff-accent clr-salmon">
                {" "}
                Chester M. Pierce
              </span>{" "}
              in the early 1970s.
            </p>
          </div>
          <div id="def3">
            <p className="clr-white">
              {" "}
              The term was coined by Harvard psychiatrist{" "}
              <span className="ff-accent clr-salmon">
                {" "}
                Chester M. Pierce
              </span>{" "}
              in the early 1970s.
            </p>
          </div>
          <div className="def4 shapeTextWrapper">
              <img src={paragraphBox2} alt="black background" className=" shapeImage shapeImg1"/>
              <p className="clr-white shapeText2">
                Originally applied to describe insults against Black Americans and
                women. Later became largely accepted as a way for people to talk
                about a wide range of issues related to discrimination, offense,
                and exclusion against any marginalized group.
              </p>
          </div>
          <div className="def5">
            <p className="clr-salmon" id="lastTxt">
              Microaggressions are always connected to systemic and
              institutionalised discrimination.
            </p>
          </div>
          <div className="space">
          </div>
        </div>
      </article>
    </div>
  )
}

export default Definition
