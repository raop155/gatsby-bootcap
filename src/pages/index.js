import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>I'am Ricardo, a full-stack developer from Perú</h2>
      <p>
        Need me? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
