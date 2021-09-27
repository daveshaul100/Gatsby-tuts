import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home page</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquid!
        </p>
      </div>
    </Layout>
  )
}
