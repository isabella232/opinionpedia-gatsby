import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuestionList from '../components/trending-questions'
import TrendingTags from '../components/trending-tags'
import OptionsPie from '../components/options-pie'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const Question = ({ pageContext }) => {
  const [showChart, setShowChart] = useState(false)
  
  return <Layout>
    <SEO title={pageContext.title} />
    <h3>{pageContext.title}</h3>
    
    
    <div style={{	display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'spaceAround', alignItems: 'stretch', alignContent: 'stretch' }}>
      <div style={{width: '200px', paddingTop: '40px'}}>
        <ul style={{listStyleType: 'none'}}>
          {
            pageContext.options.map( (option, index) => (
              <li key={`option-${index}`}> <button 
              onClick={ () => setShowChart(true)}
              style={{
                width: '100px',
                height: '50px',
                borderColor: 'white',
                backgroundColor: showChart ? COLORS[index] : '#e2e2e2'
              }}>{option}</button> </li>
            ))
          }
        </ul>
      </div>
      <div style={{}}>
        { showChart ? <OptionsPie options={pageContext.options} /> : null }
      </div>
    </div>
      
    <TrendingTags />

    <QuestionList />
  </Layout>
}


export default Question

