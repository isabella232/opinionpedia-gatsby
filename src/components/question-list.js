import React from "react"
import Questions from "../data/questions.json"
import { Link } from "gatsby"

const QuestionColumn = props => {
  const size =  Math.floor(Questions.length/props.max)
  const start = size / props.max * props.index
  
  console.log(size, start)
  
  return  <ul style={{listStyle: 'none'}}>
        {
          Questions.slice(start, start+size).map( (question, index) => (
            <li key={`link-${index}`}><Link key={`question-${index}`} to={`/question/${index}`}>{question.title}</Link> </li>
          ))
        }
  </ul>
}

const QuestionList = props => (
    <div style={{
    	display: 'flex',
    	flexDirection: 'row',
    	flexWrap: 'nowrap',
    	justifyContent: 'space-around',
    	alignItems: 'stretch',
    	alignContent: 'stretch'
    }}>
       <QuestionColumn index={0} max={3} />
       <QuestionColumn index={1} max={3} />
       <QuestionColumn index={2} max={3} />
    </div>
)

export default QuestionList