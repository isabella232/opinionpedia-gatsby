import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuestionList from "../components/question-list"

const Question = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} />
    <h3>{pageContext.title}</h3>
      <ul>
        {
          pageContext.options.map( (option, index) => (
            <li key={`option-${index}`}> <button style={{
              width: '100px',
              height: '50px',
              backgroundColor: '#f3f3f3'
            }}>{option}</button> </li>
          ))
        }
      </ul>
    <QuestionList/>
  </Layout>
)


export default Question
