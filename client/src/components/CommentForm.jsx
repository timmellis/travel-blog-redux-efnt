import React, { useEffect } from 'react'
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
  const handleChange = (event) => {
    props.createComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addComment(props.commentState.newComment)
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
