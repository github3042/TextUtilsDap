// import { getByTitle } from '@testing-library/dom'
import React, { useState } from 'react'


export default function Textform(props) {

    const [text, setText] = useState('');
    // text = "new text"  :-> Wrong way to upadate 

    const handelUpclick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase!", "success")
    }
    const handelLowclick = (event) => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase!", "success")
    }

    const handelClear = () => {
        // console.log("Upperase was clicked" + text);
        let newText = " ";
        setText(newText);
        props.showAlert(" Text has been Cleared!", "success")

    }
    const handelCopy = (event) => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert(" Text has been Copied!", "success")
    }
    const handelExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra Spaces has been Removed!", "success")
    }

    const handelOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container " style={{ color: props.mode === 'dark' ? 'white' : '#000752' }}>
                <div className="mb-3">
                    <h2 className = "mb-2">{props.heading}</h2>
                    <textarea className="form-control"  value={text} style={{
                        backgroundColor: props.mode === 'dark' ? '#190432' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#000752',
                        border:'2px solid black',
                        textDecorationColor:'none'
                    }} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>Convert to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelLowclick}>Convert to LowerCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handelExtraSpaces}>Remove Extra Spaces</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handelClear}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handelCopy}>Copy Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#000752' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text:"Nothing to preview.."}</p>
            </div>

        </>
    )
}

