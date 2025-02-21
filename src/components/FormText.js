import React, { useState } from 'react'

export default function FormText(props) {

// function to convert upper case...... 
    const uppercase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into UPPERCASE !!","success")

}
// function to convert in uppercse........
const lowecase=()=>{
    let t=text.toLowerCase();
    setText(t);
    props.showAlert("Converted into lowercase !!","success")

}

function clearbtn(){
    // alert("i am clear button");
    setText("");
    props.showAlert("All Text cleaned !!","success")

}


const textchange=(event)=>{
    // console.log ("you changing the text..");
    setText(event.target.value);
}

   const [text,setText]= useState("");
//    let words=text.split(' ').length;
    return (
    
    <div>

        <h2 className={`text-${props.mode==='light'?'primary':'light'} text-center`}>Word Counter and Converter </h2>
        <div className="mb-3">
        <textarea className="form-control border-2 border-primary"  style={{backgroundColor:props.mode==='dark'?'#021227':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={textchange} id="exampleFormControlTextarea1" rows="10" placeholder='Start Typing here...'></textarea>
        </div>
        <div className="w-100 text-center">
        <button className="btn btn-danger m-3"onClick={uppercase}> Upper Case</button>
        <button className="btn btn-danger m-3" onClick={lowecase}>Lower Case</button>
        <button className="btn btn-danger m-3"onClick={clearbtn}>Clear Text</button>
        {/* <button className="btn btn-danger m-3 px-3" onClick={titlecase}>Title Case</button> */}
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'} text-center`}>
            <h3><u>Text Summary</u></h3>
            <p>
            <h6 className="">Words: {text.length>0?text.split(" ").length:0} | Characters: {text.length} | Sentence: {text.length>0?text.split(". ").length:0}</h6>
            </p>
            <p>
                <h3 ><u>Preview:</u></h3>
                {text.length>0?text:'Type somthing Above to preview here'}
            </p>
        </div>
    </div>
  )
}
