import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Locations from './components/Locations'
import LocationDetails from './components/LocationDetails'
import CommentForm from './components/CommentForm'
import Comments from './components/Comments'

function App() {
  return (
    <div className="App">
      <h1>Exotic Travel Locations!</h1>
      <div className="flex-row">
        <div className="left">
          <Locations />
        </div>

        <div className="right">
          <Routes>
            <Route path="/locations/:id" element={<LocationDetails />} />
            <Route path="/commentform" element={<CommentForm />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
