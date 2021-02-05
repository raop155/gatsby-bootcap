import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.component}>
      <p>Created by {data.site.siteMetadata.author}, 2021</p>
    </footer>
  )
}

export default Footer
