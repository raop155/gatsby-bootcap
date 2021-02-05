import React from "react"
import Footer from "./footer"
import Header from "./header"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
