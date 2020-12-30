import React from "react"
import styled from "styled-components"
import CreatePhrase from "../components/create-phrase"

const SharePhraseDiv = styled.div`
  margin: 150px auto;
`
const ShareExperience = () => (
  <SharePhraseDiv>
    <h1>Did you experience this already?</h1>
    <CreatePhrase />
  </SharePhraseDiv>
)
export default ShareExperience
