import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LoadLocations'

const mapStateToProps = ({ locationsState }) => {
  return { locationsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  }
}


const Locations = (prop) => {

  return (

    <div>
      This is the locations landing page
    </div>

  )

}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)