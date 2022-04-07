import React, {useEffect} from 'react' 
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadLocationDetails } from '../store/actions/LocationActions'
import { AddNewLike, SaveLikes } from '../store/actions/LikeAction'  

const mapStateToProps = ({ likeState, locationDetailsState }) => {
  return { likeState, locationDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocationDetails: (id) => dispatch(LoadLocationDetails(id)),
    // fetchLikes: () => dispatch()
    incrementLikes: (id, num) => dispatch(AddNewLike(id, num)),
    saveLikes: (id, obj) => dispatch(SaveLikes(id,obj))
  }
}


const LikeButton = (props) => {

  let {id} = useParams();
  const details = props.locationDetailsState.locationDetails
  let updateableDeets = props.likeState.locationDetails;

  const handleSubmit = (event) => {
    let newLike = updateableDeets.likes;
    event.preventDefault()
    console.log("click", id, parseInt(newLike), updateableDeets)
    props.incrementLikes(id, parseInt(newLike))
    props.saveLikes(id, updateableDeets)
  }


  useEffect(() => {
    props.fetchLocationDetails(id)
  }, [id])


return (
    <div>
      <button type='submit' onClick={handleSubmit}>
          Like!
        </button>
        {updateableDeets.likes}

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
