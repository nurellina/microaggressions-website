import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/installation-styles.css"
import Vimeo from "@u-wave/react-vimeo"

const InstallationPage = () => (
  <Layout>
    <SEO title="Information about installation" />

    <section>
      <div className="container">
        <h1 className="clr-orange">Installation</h1>
        <div className="split">
          <div className="split-left">
            <p>
              Planned as a hybrid format the installation will consist of a
              website and the actual real life audiovisual installment , where
              one person at a time can walk in to immerse themself in
              microaggressions.
            </p>
            <p>
              Our installation is surrounding the viewer, creating an immersive
              spatial experience with the use of projection mapping. Our main
              metaphor about microaggressions is that they are like
              mosquito-bites, one is an inconvenient feeling, but it’s easy to
              get over it, but as they happen more and more often, and the
              quantity and the frequency increases, they become unbearable.
            </p>
          </div>

          <div className="split-right">
            <p>
              We recreate a similar pattern with the combination of our
              swarm-like visualization forming typically used micro-insults, and
              the subtle increasement of discomfort in the music and in the
              visuals. We ask our visitors to share their own experiences, and
              contribute to our growing database of hurtful senten- ces, which
              becomes part of our exhibition as well. Here you can find several
              Interviews to give you a better idea of
            </p>
          </div>
        </div>

        <Vimeo
          className="vimeo-clip"
          video="509402966"
          color="ff0000"
          showPortrait="0"
        />
      </div>
    </section>
  </Layout>
)
export default InstallationPage
