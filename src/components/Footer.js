import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer classNameName="d-flex flex-wrap justify-content-between text-center py-3 my-4">
    <div className={`col-md-4 text-center w-100  text-${props.mode==='light'?'dark':'light'}`}>
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </a>
      <span className="mb-3  text-center"><h5>© 2025 Adarsh Production, Inc</h5></span>
    </div>
  </footer>
    </div>
  )
}
