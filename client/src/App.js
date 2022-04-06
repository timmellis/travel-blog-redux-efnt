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
      
      <header>
        <h1>Exotic Travel Locations!</h1>

      </header>

      <div className="body-grid">
        <div className="body-grid-left">
          Left content
        </div>

        <div className="body-grid-middle">
          <Routes>
            <Route path="/" element={< Locations />} />
            <Route path="/locations/:id" element={<LocationDetails />} />
            <Route path="/commentform" element={<CommentForm />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>

        <div className="body-grid-right">
          Right content
        </div>
      </div>
    </div>
  )
}

export default App
