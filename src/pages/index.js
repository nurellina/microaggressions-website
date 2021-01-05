import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Visualization from "../components/home-page/visualization"
import Vote from "../components/home-page/vote"
import Definition from "../components/home-page/definition"
import Examples from "../components/home-page/examples"
import Difference from "../components/home-page/difference"
import Characteristics from "../components/home-page/characteristics"
import TellUs from "../components/home-page/tell-us"
import Harm from "../components/home-page/harm"
import Disarmed from "../components/home-page/disarmed"
import Reaction from "../components/home-page/reaction"
import ShowPhrases from "../components/show-phrases"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ShowPhrases />
    <Vote />
    <Definition />
    <Examples />
    <Difference />
    <Characteristics />
    <TellUs />
    <Harm />
    <Disarmed />
    <Reaction />
  </Layout>
)

export default IndexPage
