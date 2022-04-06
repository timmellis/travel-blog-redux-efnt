import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  CreateNewComment,
  AddNewComment
} from '../store/actions/CommentActions'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (formValue) => dispatch(CreateNewComment(formValue)),
    addComment: (newComment) => dispatch(AddNewComment(newComment))
  }
}

const CommentForm = (props) => {
  const [newComment, setNewComment] = useState({
    userName: '',
    comment: '',
    location: '624d99fb376620b92971801d'
  })
  const handleChange = (event) => {
    if (event.target.name === 'newName') {
      setNewComment({ ...newComment, userName: event.target.value })
    } else if (event.target.name === 'newComment') {
      setNewComment({ ...newComment, comment: event.target.value })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addComment(newComment)
  }

  return (
    <div>
      <h1>Comment Form</h1>
      <form>
        Name{' '}
        <input
          type="text"
          name="newName"
          value={props.newName}
          onChange={handleChange}
        />
        Comment:
        <input
          type="text"
          name="newComment"
          value={props.newComment}
          onChange={handleChange}
        />
        <input type="hidden" value="624d99fb376620b92971801d" />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
