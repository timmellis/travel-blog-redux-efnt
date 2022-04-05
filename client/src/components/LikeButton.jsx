import React, {useEffect} from 'react' 
import { connect } from 'react-redux' 

const LikeButton = (props) => {

return (
    <div>
      <button type='submit' onClick={props.handleLike}>
          Like!
        </button>

    </div>
  )
}

export default LikeButton;