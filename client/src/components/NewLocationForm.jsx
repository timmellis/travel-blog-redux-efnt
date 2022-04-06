import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  CreateNewLocationName,
  CreateNewLocationState,
  CreateNewLocationDetails,
  CreateNewLocationImage,
  AddNewLocation
} from '../store/actions/LocationActions'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewLocationName: (formValue) =>
      dispatch(CreateNewLocationName(formValue)),
    createNewLocationState: (formValue) =>
      dispatch(CreateNewLocationState(formValue)),
    createNewLocationDetails: (formValue) =>
      dispatch(CreateNewLocationDetails(formValue)),
    createNewLocationImage: (formValue) =>
      dispatch(CreateNewLocationImage(formValue)),
    addLocation: (newLocation) => dispatch(AddNewLocation(newLocation))
  }
}

const NewLocationForm = (props) => {
  // const [newLocation, setNewLocation] = useState({
  //   name: '',
  //   location: '',
  //   likes: 0,
  //   details: '',
  //   image: ''
  // })
  let navigate = useNavigate()

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      props.createNewLocationName(event.target.value)
    } else if (event.target.name === 'location') {
      props.createNewLocationState(event.target.value)
    } else if (event.target.name === 'details') {
      props.createNewLocationDetails(event.target.value)
    } else if (event.target.name === 'image') {
      props.createNewLocationImage(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('location state', props.locationState)
    let newLocation = {
      name: props.locationState.newLocationName,
      location: props.locationState.newLocationState,
      likes: 0,
      details: props.locationState.newLocationDetails,
      image: props.locationState.newLocationImage
    }
    console.log('newlocation:', newLocation)
    props.addLocation(newLocation)
    navigate(`/`)
  }

  return (
    <div className="new-location-form">
      <h1>New Location Post</h1>
      <form onSubmit={handleSubmit}>
        Location Name:
        <input
          type="text"
          name="name"
          value={props.newName}
          onChange={handleChange}
        />
        Location State:
        <input
          type="text"
          name="location"
          value={props.location}
          onChange={handleChange}
        />
        Location Details:
        <textarea
          rows="4"
          cols="50"
          name="details"
          value={props.details}
          onChange={handleChange}
        />
        Location Image:
        <input
          type="text"
          name="image"
          value={props.image}
          onChange={handleChange}
        />
        <button type="submit">submit post</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationForm)
