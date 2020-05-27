import React from 'react'
import Questions from '../data/questions.json'
import { Link } from 'gatsby'

const QuestionsColumn = (props) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {Questions.slice(props.start, props.end).map((question, index) => (
        <li key={`link-${index}`}>
          <Link key={`question-${index}`} to={`/question/${index}`}>
            {question.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const TrendingQuestions = (props) => (
  <React.Fragment>
    <h3>Trending Questions</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
      }}
    >
      <QuestionsColumn start={0} end={3} />
      <QuestionsColumn start={4} end={7} />
      <QuestionsColumn start={8} end={11} />
    </div>
  </React.Fragment>
)

export default TrendingQuestions
