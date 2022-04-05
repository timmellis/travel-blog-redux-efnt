import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import { LoadComments } from '../store/actions/LocationActions'

const mapStateToProps = ({ ProductState }) => {
  return { ProductState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadComments())
  }
} 

const Comments = (props) => {

  useEffect(() => {
    props.fetchComments()
    
  }, [])

  return (
    <div>
      This is the Comments component.
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)