import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  LoadLocationDetails,
  LoadLocationComments
} from '../store/actions/LocationActions'

const mapStateToProps = ({ locationDetailsState }) => {
  return { locationDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocationDetails())
  }
}

const LocationDetails = (prop) => {
  return <div>This is the locations DETAILS page</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
