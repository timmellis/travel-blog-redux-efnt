import { useState } from 'react'
import { connect } from 'react-redux'

import {
  CreateNewLocation,
  AddNewLocation
} from '..store/actions/LocationActions'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLocation: (formValue) => dispatch(CreateNewLocation(formValue)),
    addLocation: (newLocation) => dispatch(AddNewLocation(newLocation))
  }
}

const NewLocationForm = (props) => {
  const [newLocation, setNewLocation] = useState({
    name: '',
    location: '',
    likes: 0,
    details: '',
    image: ''
  })

  const handleChange = (event) => {
    if (event.targe.name === 'name') {
      setNewLocation({ ...newLocation, name: event.target.value })
    } else if (event.target.name === 'location') {
      setNewLocation({ ...newLocation, location: event.target.value })
    } else if (event.target.name === 'details') {
      setNewLocation({ ...newLocation, details: event.target.value })
    } else if (event.target.name === 'image') {
      setNewLocation({ ...newLocation, image: event.target.value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addLocation(newLocation)
  }

  return (
    <div className="new-location-form">
      <h1>New Location Post</h1>
      <form>
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
        <input
          type="text"
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
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationForm)
