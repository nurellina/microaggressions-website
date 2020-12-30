import React from "react"
import {
  Hero,
  Canvas,
  Title,
  TitleContainer,
  TextContainer,
  Text,
  ShapeContainer,
} from "../../styles/heroSectionStyles"
import Image from "../../images/shape.svg"
import { BigWord } from "../../styles/globalStyles"

const HomeBanner = data => {
  return (
    <Hero>
      {/* Canvas with data visualization of phrases*/}
      <Canvas />
      {/* Red rectange on the right with voting and yes/no */}
      <ShapeContainer>
        <img src={Image} alt="Shape Bunner" />
        <TitleContainer>
          <Title>
            Were you ever offended
            <br />
            by any of these questions?
          </Title>
        </TitleContainer>
      </ShapeContainer>
      {/* Text on the left with statistics */}
      <TextContainer>
        {" "}
        <Text fontLarge>Oh, we feel you!</Text>{" "}
        <Text>
          {" "}
          By the way 71% of people answered YES.
          <br />
          Which is quite a big amount...
        </Text>
        <Text marginBottomXL>
          All these questions can fall into the category of{" "}
          <BigWord> microagressions</BigWord>.{" "}
        </Text>
      </TextContainer>
    </Hero>
  )
}

export default HomeBanner
