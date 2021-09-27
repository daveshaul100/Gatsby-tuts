import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Homepage</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}
