import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CreatePhrase from "../components/create-phrase"
import ShowPhrases from "../components/show-phrases"

const SharePhraseDiv = styled.div`
  margin: 150px auto;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SharePhraseDiv>
      <h1>Did you experience this already?</h1>
      <CreatePhrase />
      <ShowPhrases />
    </SharePhraseDiv>
  </Layout>
)

export default IndexPage
