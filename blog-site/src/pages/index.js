import React from "react"
// import { Link } from "gatsby"
import Home from "../components/home"
import Img from "gatsby-image"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Footer />
  </Layout>
)

export default IndexPage
