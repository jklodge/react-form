import React from "react"
// import { Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      crimeno: file(relativePath: { eq: "crimeno.png" }) {
        ...fluidImage
      }
      gays: file(relativePath: { eq: "gays.png" }) {
        ...fluidImage
      }
      crumbs: file(relativePath: { eq: "crumbs.png" }) {
        ...fluidImage
      }
      rollingstones: file(relativePath: { eq: "rollingstones.png" }) {
        ...fluidImage
      }
      poemportraits: file(relativePath: { eq: "poemportraits.png" }) {
        ...fluidImage
      }
      radicallux: file(relativePath: { eq: "radicallux.png" }) {
        ...fluidImage
      }
    }
  `)
  return (
    <main>
      <div className="homeAbout">
        <h3>Hey!</h3>
        <p>
          I am Jess, a developer based in London. In short, I am passionate
          about bringing fun, helpful or just crazy ideas to life. I enjoy
          working on new things with new technologies, I'm pretty much always up
          for a challenge! Here is a selection of projects I've worked on, plus
          my own work. Please feel free to explore & tell me what you think
          about it!
        </p>
      </div>
      <div className="cardContainer">
        <div className="border"></div>
        <div className="cardBox">
          <a
            href="https://www.selfridges.com/GB/en/features/articles/selfridges-loves/the-rolling-stones-at-selfridges/"
            target="_blank"
          >
            <div className="overlay">
              <p>Rolling Stones x Selfridges</p>
            </div>
            <Card bg="primary" text="white">
              <Img fluid={data.rollingstones.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />
        <div className="cardBox">
          <a
            href="https://artsexperiments.withgoogle.com/poemportraits"
            target="_blank"
          >
            <div className="overlay">
              <p>Es Delvin x Google</p>
            </div>
            <Card bg="primary" text="white">
              <Img fluid={data.poemportraits.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />
        <div className="cardBox">
          <a href="http://www.crimeno.com" target="_blank">
            <div className="overlay">
              <p>CrimeNo</p>
            </div>
            <Card bg="primary" text="white">
              <Img fluid={data.crimeno.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />

        <div className="cardBox">
          <a href="https://yearbook-awards.herokuapp.com/" target="_blank">
            <div className="overlay">
              <p>GAYS</p>
            </div>
            <Card bg="secondary" text="white">
              <Img fluid={data.gays.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />

        <div className="cardBox">
          <a href="https://jesslodge.herokuapp.com/" target="_blank">
            <div className="overlay">
              <p>Crumbs Canvas</p>
            </div>
            <Card bg="info" text="white">
              <Img fluid={data.crumbs.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />
        <div className="cardBox">
          <a
            href="https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/https://www.selfridges.com/QA/en/features/articles/radical-luxury/radical-luxury-at-selfridges/"
            target="_blank"
          >
            <div className="overlay">
              <p>Radical Luxury x Selfridges</p>
            </div>
            <Card bg="primary" text="white">
              <Img fluid={data.radicallux.childImageSharp.fluid} />
            </Card>
          </a>
        </div>
        <br />
      </div>
    </main>
  )
}
