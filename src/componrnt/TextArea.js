import React, { useState } from 'react'

export default function TextArea(props) {
    const wordReadTime = 0.008
    const [text, setText] = useState("");
    const handleUpperClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.displayAlert('Converted to uppercase','success')
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.displayAlert('Converted to lowercase','success')
    }
    const handleClear = ()=>{
        setText("")
        props.displayAlert('Text Cleared','success')
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.displayAlert('Text copied to clipboard','success')
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    // let frequency = {}
    // const handleLetterFrequency = () =>{
    //   for (let letter of text)
    //     {
    //       if(letter in frequency)
    //       {
    //         frequency[letter] += 1
    //       }
    //       else {
    //           frequency[letter] = 1
    //       }
          
    //     }
    // }
    
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
  return (
    <>
    <div className='container'>
    <h2>{props.heading}</h2>    
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" placeholder="Enter your text here" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpperClick} >Convert to Upper</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick} >Convert to Lower</button>
    {/* <button className='btn btn-primary mx-1' onClick={handleLetterFrequency} >Letter frequency</button> */}
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={handleClear} >Clear</button>
    </div>
    <div className='container my-3'>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").filter((a)=>a.length !==0).length} words and {text.length} characters</p>
        <p>{(wordReadTime * text.split(" ").filter((a)=>a.length !==0).length).toFixed(2)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        {/* <p>{frequencyG.value}</p> */}
    </div>
    </>
  )
}