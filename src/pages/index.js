import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CreatePhrase from "../components/create-phrase"
import ShowPhrases from "../components/show-phrases"
import HomePage from "../components/home-page/home-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
