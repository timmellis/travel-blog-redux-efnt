import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAllComments } from '../store/actions/CommentActions'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(GetAllComments())
  }
}

const Comments = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchComments()
  }, [])
  if (!props || !props.commentState.comments) {
    return <div>Now loading...</div>
  } else {
    return (
      <div>
        <p>This is the Comments component.</p>
        <div className="user-comments">
          {props.commentState.comments.map(
            (comment) =>
              comment.location === id && (
                <div className="user-comment-wrapper" key={comment._id}>
                  <div className="user-name">{comment.userName}</div>
                  <div className="user-comment">{comment.comment}</div>
                </div>
              )
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
