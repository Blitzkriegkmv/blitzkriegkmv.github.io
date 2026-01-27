import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="blurry-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BLITZ</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/sponsors" className="nav-link">SPONSORS</Link>
          <Link to="/events" className="nav-link">EVENTS</Link>
          <Link to="/team" className="nav-link">OUR TEAM</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
