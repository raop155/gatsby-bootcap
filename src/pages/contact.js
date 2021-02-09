import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
