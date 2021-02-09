import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import styles from "./header.module.scss"
import {
  GlobalDispatchProvider,
  GlobalStateProvider,
} from "../context/GlobalContextProvider"

const Header = () => {
  const dispatch = useContext(GlobalDispatchProvider)
  const state = useContext(GlobalStateProvider)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.component}>
      <h1>
        <Link to="/" className={styles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={styles.activeNavItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={styles.activeNavItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={styles.activeNavItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {state.cart}
      <button
        onClick={() => {
          dispatch({ type: "ADD_TO_CART" })
        }}
      >
        Dispatch
      </button>
    </header>
  )
}

export default Header
