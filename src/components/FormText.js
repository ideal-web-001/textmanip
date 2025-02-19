import React, { useState } from 'react'

export default function FormText() {
const uppercase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
// function to convert in uppercse........
const lowecase=()=>{
    let t=text.toLowerCase();
    setText(t);
}

// function to clear text.........
const clear=()=>{
    let newText=setText("")
    setText(newText)
}


const titlecase=()=>{
   
    let temp=text.split(" ");
    // let newtext="";
   
    for(let i=0;i<temp.length;i++) {
       temp[i]= temp[i].trim()[0].toUpperCase() +temp[i].trim().slice(1);
        console.log(temp[i])
        
    }
        // console.log(newText)  
        
    }
  
// const countWord=()=>{
//      let words=text.split(' ').length;
//     console.log(words);
//     alert("Word Count: "+words);
// }    


const textchange=(event)=>{
    // console.log ("you changing the text..");
    setText(event.target.value);
}

   const [text,setText]= useState("");
//    let words=text.split(' ').length;
    return (
    
    <div>

        <h2 className="text-primary text-center ">Word Counter and Converter </h2><h6 className="text-center">Words: {text.split(" ").length} | Characters: {text.length} | Sentence: {text.split('.').length}</h6>
        <div className="mb-3">
        <textarea className="form-control border-2 border-primary"  value={text} onChange={textchange} id="exampleFormControlTextarea1" rows="10" placeholder='Start Typing here...'></textarea>
        </div>
        <div className="w-100 text-center">
        <button className="btn btn-danger m-3"onClick={uppercase}> Upper Case</button>
        <button className="btn btn-danger m-3" onClick={lowecase}>Lower Case</button>
        <button className="btn btn-danger m-3" onClick={clear}>Clear Text</button>
        <button className="btn btn-danger m-3 px-3" onClick={titlecase}>Title Case</button>
        </div>
    </div>
  )
}
