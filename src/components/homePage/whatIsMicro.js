import React from "react"
import {
  ShapeContainer,
  Text,
  Wrapper,
  Background,
} from "../../styles/whatIsMicroStyles"
import { Hero } from "../../styles/heroSectionStyles"
import Image2 from "../../images/shape2.svg"
import Image3 from "../../images/shape3.svg"
import Image4 from "../../images/shape4.svg"
import Image5 from "../../images/shape5.svg"
import Illustration from "../../images/illustration.png"
import { Section, Paragraph, Title, BigWord } from "../../styles/globalStyles"

const WhatIsMicro = () => {
  return (
    <Hero>
      <Background>
        <img src={Illustration} alt="Illustration" width="100%" />
      </Background>
      {/* Big black shape on the left with the definition of microagression */}
      <ShapeContainer positionTwo>
        <img src={Image2} alt="Shape 2" />
        <Section>
          <Title>But, what are Microaggressions?</Title>
          <Text>
            A microaggression is a <BigWord>comment</BigWord> or gesture
            (whether made intentionally or not) <br />
            that <BigWord>feeds into stereotypes</BigWord> or negative
            assumptions created around oppressed
            <br /> or <BigWord>marginalized groups</BigWord> of people.
          </Text>
        </Section>
      </ShapeContainer>
      {/* Two black shapes with paragraphs text on it without a title */}
      <ShapeContainer positionThree>
        <img src={Image3} alt="Shape 3" />
        <Wrapper>
          <Paragraph>
            It can also be defined as the everyday, subtle, intentional — and
            oftentimes unintentional — interactions or behaviors that
            communicate some sort of bias toward historically marginalized
            groups.
          </Paragraph>
        </Wrapper>
      </ShapeContainer>

      <ShapeContainer positionFour>
        <img src={Image4} alt="Shape 4" />
        <Wrapper>
          <Paragraph>
            Originally applied to describe insults against Black Americans and
            women. <br />
            Later became largely accepted as a way for people to talk about a
            wide range of issues related to discrimination, offense, and
            exclusion against any marginalized group.
          </Paragraph>
        </Wrapper>
      </ShapeContainer>
      {/* Black shape with full width on the bottom with a header */}
      <ShapeContainer positionFive>
        <img src={Image5} alt="Shape 5" />
        <Wrapper shapeFive>
          <Title shapeFive>
            Microaggressions are always connected to systemic and
            institutionalised discrimination.
          </Title>
        </Wrapper>
      </ShapeContainer>
    </Hero>
  )
}

export default WhatIsMicro
