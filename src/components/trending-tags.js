import React from 'react'
import Tags from '../data/tags.json'
import { Link } from 'gatsby'

const TagsColumn = (props) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {Tags.slice(props.start, props.end).map((tag, index) => (
        <li key={`link-${index}`}>
          <Link key={`tag-${index}`} to={`/tag/${index}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const TrendingTags = (props) => (
  <React.Fragment>
    <h3>Trending Tags</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
        textTransform: 'capitalize'
      }}
    >
      <TagsColumn start={0} end={3} />
      <TagsColumn start={4} end={7} />
      <TagsColumn start={8} end={11} />
    </div>
  </React.Fragment>
)

export default TrendingTags
