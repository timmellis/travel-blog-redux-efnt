import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import { LoadComments } from '../store/actions/LocationActions'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadComments())
  }
}

const Comments = (props) => {
  useEffect(() => {
    props.fetchComments()
  }, [])
  console.log(props)
  return (
    <div>
      <p>This is the Comments component.</p>
      <ul></ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
