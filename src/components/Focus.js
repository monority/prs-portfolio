import React, { Fragment } from 'react'
import BoxFocus from './BoxFocus'

const Focus = ({ typicon, title, content }) => {
  
  return (
    <Fragment>
      <div className="wrapper-regroup">
        <BoxFocus
          title="Adaptavity"
          img="repo1.svg"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>
        <BoxFocus
          typeIcon="AiOutlineProfile"
        ></BoxFocus>
      </div>
      <div className="wrapper-regroup">
        <BoxFocus
          title="Polyvalent"
          img="repo1.svg"
        ></BoxFocus>
        <BoxFocus
          typeIcon="AiOutlineProfile"
        ></BoxFocus>
      </div>
      <div className="wrapper-regroup">
        <BoxFocus
          title="Creativity"
          img="repo1.svg"
        ></BoxFocus>
        <BoxFocus
          typeIcon="AiOutlineProfile"
        ></BoxFocus>
      </div>

    </Fragment>
  )
}

export default Focus