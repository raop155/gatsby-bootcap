import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Layout from "../components/layout"
import styles from "./blog.module.scss"
import { GlobalStateProvider } from "../context/GlobalContextProvider"
import Head from "../components/head"

const BlogPage = () => {
  const state = useContext(GlobalStateProvider)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <div className={styles.component}>
        <h1>Blog</h1>
        <ol>
          {posts.map(post => (
            <li key={post.node.slug}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      {state.cart}
    </Layout>
  )
}

export default BlogPage
