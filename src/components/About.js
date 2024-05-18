import React, { useState } from 'react';

export default function About(props) {
const[mode,Setmode]=useState("darkMode")
  const [stylesheet, setText] = useState({
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '12px',

  })
  const toggle= ()=>{
    console.log("ok")
    if(stylesheet.color=='black'){
      setText({
        color:'white',
        backgroundColor:'black'
        
      })
      Setmode("lightMode")
    }else{
      setText({
        color:'black',
        backgroundColor:'white'
      })
      Setmode("darkMode")
    }
}
  return (
    <>
    <div className="container my-4"  style={{ backgroundColor: props.mode === 'dark' ? 'dark' : 'white', color: props.mode === 'dark' ? 'white' : 'dark' }}>
      <div className>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
      </div>
    </div>
    
        
        
        
      
    
    </>
  );
}
