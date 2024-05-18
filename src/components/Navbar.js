import React from 'react';
import {
  BrowserRouter as Router,
  
 
} from "react-router-dom";
import {Link} from "react-router-dom"

export default function Navbar(props) {


  return (
    <>
   
      <div>
              
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className="navbar-brand" href="/">{props.tiltle}</a>
          <img src =""></img>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active" style={{ backgroundColor: props.mode === 'dark' ? 'dark' : 'light' }}>
                <a className="nav-link" href="/"><div className="form-check form-switch" >
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.botton}</label>
                </div> <span className="sr-only">(current)</span></a>
              </li>

            </ul>
           
          </div>
         
        </nav>
      </div>
    </>
  );
}
