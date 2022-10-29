import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div><nav
    className="navbar navbar-expand-lg bg-light mb-3"
    style={{ height: "50px", backgroundColor: "#4e4ceb"}}
  >
    <div className="container-fluid" style={{display: "flex" , justifyContent: "center", alignItems: "center", lineHeight: "50px"}}>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          className="navbar-nav"
          style={{ display: "flex", alignItems: "center" }}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
            
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
            
        </ul>
      </div>
    </div>
  </nav></div>
    
  )
}

export default Header