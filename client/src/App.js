import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Locations from './components/Locations'
import LocationDetails from './components/LocationDetails'
import NewLocationForm from './components/NewLocationForm'
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

        <Link to={'/'}>
            <div className='btn'>Home</div>
          </Link>
          <Link to={'/newpost'}>
            <div className='btn'>Create New Post</div>
          </Link>
        </div>

        <div className="body-grid-middle">
          <Routes>
            <Route path="/" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationDetails />} />
            <Route path="/commentform" element={<CommentForm />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/newpost" element={<NewLocationForm />} />
          </Routes>
        </div>

        <div className="body-grid-right">
                    <Routes>
            <Route path="/locations/:id" element={<CommentForm />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
