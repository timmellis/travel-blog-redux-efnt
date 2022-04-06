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
  const details = props.locationDetailsState.locationDetails
  console.log('location details:', details)
  if (!props || !props.locationDetailsState.locationDetails) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <p>This is the locations landing page</p>
        <div className="location-name">{details.name}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
