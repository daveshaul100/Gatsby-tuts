import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          saepe.
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: teal;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
