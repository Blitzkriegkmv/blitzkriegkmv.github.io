import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">BLITZ<span className="logo-accent">KRIEG</span></span>
          <p className="footer-tagline">The Final Battle Awaits</p>
        </div>
        
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/team">The Crew</Link>
          <Link to="/sponsors">Allies</Link>
        </nav>
        
        <div className="footer-social">
          <p className="social-label">Find Us in the Upside Down</p>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/company/the-computer-science-society-keshav-mahavidyalaya/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/media/linkedin-icon.png" alt="" />
            </a>
            <a 
              href="https://www.instagram.com/blitzkmv/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/media/instagram-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Blitzkrieg • Keshav Mahavidyalaya • All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
