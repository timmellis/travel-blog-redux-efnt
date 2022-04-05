import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations, LoadLocationComments } from '../store/actions/LoadLocations'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  }
}


const Locations = (prop) => {

  return (

    <div>
      This is the locations page
    </div>

  )

}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)