import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import QuestionList from '../components/trending-questions'
import TrendingTags from '../components/trending-tags'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h3>A thought or belief about something or someone:</h3>
    <ul>
      <li>
        What's your <b>opinion</b> about/on the matter?
      </li>
      <li>
        People tend to have strong <b>opinions</b> on capital punishment.
      </li>
      <li>
        He didn't express/give an <b>opinion</b> on the matter.
      </li>
      <li>
        Who, in your <b>opinion</b>, (= who do you think) is the best soccer
        player in the world today?
      </li>
      <li>
        He's very much of the <b>opinion</b> that alternative medicine is a
        waste of time.
      </li>
    </ul>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <TrendingTags />

    <QuestionList />
  </Layout>
)

export default IndexPage
