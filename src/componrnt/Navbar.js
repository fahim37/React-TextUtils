import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto"/>
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="customSwitch1"/>
      <label className="form-check-label" htmlFor="customSwitch1">Enable dark Mode</label>
    </div>
  </div>
</nav>
  )
}
