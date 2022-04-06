import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  LoadLocationDetails,
  LoadLocationComments
} from '../store/actions/LocationActions'
import Comments from './Comments'
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
  if (!props || !props.locationDetailsState.locationDetails) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h3 className="location-name">{details.name}</h3>
        <h4>{details.location}</h4>
        <div className="location-img">
          <img
            src={details.image}
            style={{ maxWidth: '800px', maxHeight: '400px' }}
          />
        </div>
        <div className="location-name">{details.details}</div>
        <Comments />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
