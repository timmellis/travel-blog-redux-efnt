import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions'


const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const Locations = (props) => {

  useEffect(() => {
    props.fetchLocations()
    console.log("useEffect",props);
  }, [])

  console.log("props",props)

if (!props || !props.locationState.locations.locations) {
  return (
    <div>Loading...</div>
  )
} else {
    return (
      <div>
        <p>This is the locations landing page</p>
        <ul>
          {props.locationState.locations.locations.map((location) => (
            <li key={location._id}>{location.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
