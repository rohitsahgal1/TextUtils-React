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
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");
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
      <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
      color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder="Enter Text Here" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.btColor} mx-1 my-1`} onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.btColor} mx-1 my-1`} onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.btColor} mx-1 my-1`} onClick={handleDeleteClick} >Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.btColor} mx-1 my-1`} onClick={handleCopy} >Copy Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.btColor} mx-1 my-1`} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in the above text box for preview."}</p>
    </div>
    </>
  )
}
