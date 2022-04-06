import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  LoadLocationDetails,
  LoadLocationComments
} from '../store/actions/LocationActions'

const mapStateToProps = ({ locationDetailsState }) => {
  return { locationDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: (id) => dispatch(LoadLocationDetails(id))
  }
}

const LocationDetails = (props) => {

  let { id } = useParams()

  useEffect(() => {
    props.fetchLocations(id)

  }, [id])
  if (!props || !props.locationDetailsState.locations) {
    return (
      <div>Loading...</div>
    )
  } else {
      return (
        <div>
          <p>This is the locations landing page</p>
          <ul>
            {props.locationDetailsState.locations.map((location) => (
              <li key={location._id}>{location}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
