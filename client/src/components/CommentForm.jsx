import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 

const CommentForm = (props) => {


return (
    <div>
      <h1>Comment Form</h1>
      <form>
        Name <input type='text' name='newName' value={props.newName} onChange={props.handleChange} />

        Comment: 
        <input type='text' name='newComment' value={props.newComment} onChange={props.handleChange} />
        <button type='submit' onClick={props.handleSubmit}>
          Submit
        </button>

      </form>  
    </div>
  )
}

export default CommentForm;