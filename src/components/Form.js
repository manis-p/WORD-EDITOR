import React, { useState } from 'react';

//text= update== not allowed,use setText method
const mani = {
  backgroundColor: '#6a6b6a',
  color: 'white',
}
const look = {
  color: 'dark',

}

export default function Form(props) {

  const handleClick = () => {
    console.log("upperCse was clicked" + text)
    let newtext = text.toUpperCase()
    setText(newtext)
    if(text==Number){
      props.set("wrong input","danger")
    }
    props.set("convet to Uppercase","success")
  }
  const handleClick1 = () => {
    console.log("upperCse was clicked" + text)
    let newtext = text.toLowerCase()
    setText(newtext)
    props.set("convet to Lowercase","success")
  }
  const handleClick3 = () => {
    console.log("i am copy" + text)
    let  a = document.getElementById('exampleFormControlTextarea1')
    a.select()
    navigator.clipboard.writeText(a.value);
    document.getSelection().removeAllRanges();
    props.set("sucessful copy text","success")
  }
  const handleClick4 = () => {
    console.log("Extra spaces remove" + text)
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.set("remove extra spaces","success")
  }
  const handleClick5 = () => {
    console.log("clear text" + text)
    let b = '';
    setText(b)
    
    props.set("sucessfull claerText","success")
  }
  const handleOn = (event) => {
    console.log("on changed")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here')
  return (
    <>
      <div className="container mt-5" style={{ color: props.mode === 'light' ? 'light' : 'black' }}>
        <h1>{props.headline}</h1>
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOn} style={{ backgroundColor: props.mode === 'dark' ? 'none' : '#3467eb', color: props.mode === 'dark' ? 'none' : 'white' }} />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick} >Convert to upperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick1} >Convert to lowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick3} >Copy allText</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick4} >removeSpace</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick5} >Cleartext</button>
      </div>
      <div>
        <h4 className="container  my-4" style={{ color: props.mode === 'light' ? 'light' : 'black' }}>Some more fatures</h4>
        <p className="container " style={{ color: props.mode === 'light' ? 'light' : 'black' }}>Number of words:{text.length} and sentense are:{text.split(" ").length}</p>
                <h3 className="container ">Review</h3>
        <p className="container " >{text.length>0?text:"Noting to preview"}</p>

      </div>
    </>
  );
}
