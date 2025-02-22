import React, { useState } from 'react'

export default function FormText(props) {

    const [text,setText]= useState("");

// function to convert upper case...... 
    const uppercase=()=>{
        if(text.length===0){
            props.showAlert(": Enter something first !!","warning")
        }
        else{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert(": Converted into UPPERCASE !!","success")
        }

}
// function to convert in uppercse........
const lowecase=()=>{
    if(text.length===0){
        props.showAlert(": Enter something first !!","warning")
    }
    else{
        let t=text.toLowerCase();
        setText(t);
        props.showAlert(": Converted into lowercase !!","success")
    }
   

}
const titleCase=()=>{
    if(text.length===0){
        props.showAlert(": Enter something first !!","warning")
 
    }
    else{
        let temp=text.toLowerCase();
        temp=temp.split(" ").map((element)=>element.charAt(0).toUpperCase()+ element.slice(1)).join(" ")
        setText(temp)
        props.showAlert(": Converted into lowercase !!","success")
    }
    
}
const sentenceCase=()=>{
    if(text.length===0){
        props.showAlert(": Enter something first !!","warning")
    }
    else{
        let temp=text.toLowerCase();
        temp=temp.split(".").map((element)=>element.charAt(0).toUpperCase()+ element.slice(1)).join(".")
        setText(temp)
        props.showAlert(":Converted into lowercase !!","success")
    }
}

function clearbtn(){
    // alert("i am clear button");
    setText("");
    props.showAlert(":All Text cleaned !!","success")

}


const textchange=(event)=>{
    // console.log ("you changing the text..");
    setText(event.target.value);
}


//    let words=text.split(' ').length;
    return (
    
    <div>

        <h2 className={`text-${props.mode==='light'?'primary':'light'} text-center`}>Word Counter and Converter </h2>
        <div className="mb-3">
        <textarea className="form-control border-2 border-primary"  style={{backgroundColor:props.mode==='dark'?'#021227':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={textchange} id="exampleFormControlTextarea1" rows="10" placeholder='Start Typing here...'></textarea>
        </div>
        <div className="w-100 text-center">
        <button  className="btn btn-danger m-3"onClick={uppercase}> Upper Case</button>
        <button  className="btn btn-danger m-3" onClick={lowecase}>Lower Case</button>
        <button  className="btn btn-danger m-3" onClick={titleCase}>Title Case</button>
        <button  className="btn btn-danger m-3" onClick={sentenceCase}>Sentence Format</button>
        <button disabled={text.split(" ").filter((element)=>element==="").length} className="btn btn-danger m-3"onClick={clearbtn}>Clear Text</button>
        {/* <button className="btn btn-danger m-3 px-3" onClick={titlecase}>Title Case</button> */}
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'} text-center`}>
            <h3><u>Text Summary</u></h3>
            
                <h6 className="">
                    Words: {text.split(/\s+/).filter((element)=>element!=="").length} |
                    Characters: {text.length} | 
                    Sentence: {text.split(". ").filter((element)=>element!=='').length}
                </h6>
           
            <h3 >
                    <u>Preview:</u>
                </h3>
            <p>
                
                {text.length>0?text:'Type somthing Above to preview here'}
            </p>
        </div>
    </div>
  )
}
