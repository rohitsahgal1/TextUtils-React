import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handleLoClick = ()=>{
      //console.log("Lowercase was clicked: "+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");

  }
  const handleDeleteClick = ()=>{
    let newText="";
      setText(newText);
      props.showAlert("Deleted Successfully","success");
  }
  const handleFillClick = ()=>{
    let newText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      setText(newText);
      props.showAlert("Filled with Gibberish","success");

  }
  const handleOnChange = (event)=>{
      //console.log("On change");
      setText(event.target.value);
  }
    const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white',
      color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder="Enter Text Here" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.btColor} mx-1`} onClick={handleUpClick}>Convert to uppercase</button>
      <button className={`btn btn-${props.btColor} mx-1`} onClick={handleLoClick}>Convert to lowercase</button>
      <button className={`btn btn-${props.btColor} mx-1`} onClick={handleDeleteClick} >Clear Text</button>
      <button className={`btn btn-${props.btColor} mx-1`} onClick={handleFillClick} >Fill Gibberish</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your text summary</h2>
      <p>{text.length>0?text.split(" ").length:"0"} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in the above text box for preview."}</p>
    </div>
    </>
  )
}
