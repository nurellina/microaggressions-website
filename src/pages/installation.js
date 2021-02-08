import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/installation-styles.css"
import Vimeo from "@u-wave/react-vimeo"

import ReactPlayer from "react-player/vimeo"

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
              contribute to our growing database of hurtful sentences, which
              becomes part of our exhibition as well.
            </p>
            <p>
              The installation will take place from the 21-25 July 2021 at the
              Sehsüchte Film Festival.
            </p>
          </div>
        </div>
      </div>

      <div className="divider">
        <svg
          className="divider-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            fillOpacity="1"
            d="M0,224L480,160L960,224L1440,256L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="installation bg-dark">
        <div className="player-wrapper container bg-dark">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/509402966"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  </Layout>
)
export default InstallationPage
