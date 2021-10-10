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
                    <h1>{props.heading}</h1>
                    <textarea className="form-control"  value={text} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#000752',
                        border:'2px solid black',
                        textDecorationColor:'none'
                    }} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handelLowclick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 " onClick={handelExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 " onClick={handelClear}>Clear Text</button>
                <button className="btn btn-primary mx-2 " onClick={handelCopy}>Copy Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#000752' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text:"Enter Somthing in th text box to see preview hear...."}</p>
            </div>

        </>
    )
}

