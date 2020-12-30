import React from "react"
import { ExamplesSection } from "../../styles/examplesMicroStyles"
import { Hero } from "../../styles/heroSectionStyles"
import { Paragraph, Title, BigWord } from "../../styles/globalStyles"

const WhatIsMicro = () => {
  return (
    <Hero>
      {/* Big black shape on the left with the definition of microagression */}
      <ExamplesSection>
        <Title>Examples of Microagressions</Title>
        <Paragraph>
          Prof. Derald W. Sue demonstrates an example of microaggressions
          towards Asian Americans and Latin Americans, who are frequently
          complimented for ‘speaking good English,’“ <br /> But there is a
          hidden communication the target experiences: ‘You speak excellent
          English’ to the target says 'You are not a true American. You're a
          perpetual alien in your own country'”
        </Paragraph>
      </ExamplesSection>
    </Hero>
  )
}

export default WhatIsMicro
