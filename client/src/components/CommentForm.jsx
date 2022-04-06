import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  CreateNewComment,
  AddNewComment,
  CreateNewCommentName
} from '../store/actions/CommentActions'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCommentName: (formValue) => dispatch(CreateNewCommentName(formValue)),
    addComment: (newComment) => dispatch(AddNewComment(newComment)),
    createNewComment: (formValue) => dispatch(CreateNewComment(formValue))
  }
}

const CommentForm = (props) => {
  let { id } = useParams()

  const handleNameChange = (event) => {
    props.createCommentName(event.target.value)
  }

  const handleCommentChange = (event) => {
    props.createNewComment(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    let newComment = {
      userName: props.commentState.newCommentName,
      comment: props.commentState.newComment,
      location: id
    }
    props.addComment(newComment)
  }

  return (
    <div>
      <h1>Comment Form</h1>
      <form>
        Name:
        <input
          type="text"
          name="newName"
          value={props.newName}
          onChange={handleNameChange}
        />
        Comment:
        <input
          type="text"
          name="newComment"
          value={props.newComment}
          onChange={handleCommentChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
