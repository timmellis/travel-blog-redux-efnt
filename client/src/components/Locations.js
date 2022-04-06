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
  }, [])

  if (!props || !props.locationState.locations) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <p>This is the locations landing page</p>
        <ul>
          {props.locationState.locations.map((location) => (
            <Link to={`locations/${location._id}`}>
              <li key={location._id}>{location.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
