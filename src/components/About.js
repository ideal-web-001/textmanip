import React from 'react'

export default function About(props) {
//     const [myStyle,setMyStyle] =useState({
//         color:'black',
//         backgroundColor:'white'
//     })
//     const [btnText,setBtnText] = useState("Enable Dark Mode")

//     const toggleStyle=()=>{
//         // alert("hello")
//         if(myStyle.color==='black'){
//             setMyStyle({
//                 color:'white',
//         backgroundColor:'black'

//             })
//             setBtnText('Enable Light mode')
//         }else{
//             setMyStyle({
//                 color:'black',
//         backgroundColor:'white'
//         })
//         setBtnText('Enable Dark mode')
//     }
const Style={backgroundColor:props.mode==='light'?"white":"#021227",color:props.mode==='light'?"black":"white"}
// }
  return (
    <div>
        <div className="container rounded-top rounded-bottom " style={{backgroundColor:props.mode==='light'?"white":"#021227",color:props.mode==='light'?"black":"white"}}>
            <h1>About US</h1>
            <div className="accordion m-3" id="accordionExample" style={{backgroundColor:props.mode==='light'?"white":"#021227",color:props.mode==='light'?"black":"white"}}>
            <div className="accordion-item" style={{backgroundColor:props.mode==='light'?"white":"#021227",color:props.mode==='light'?"black":"white"}}>
                <h2 className="accordion-header" >
                <button style={Style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1) What is Upper Case can do?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

                            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

                            THIS IS AN EXAMPLE OF UPPER CASE.
                </div>
                </div>
            </div>
            <div style={Style} className="accordion-item">
                <h2 className="accordion-header">
                <button style={Style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2) What is Lower Case can do?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Lower Case</strong> If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

                        this is an example of lower case.
                </div>
                </div>
            </div>
            <div style={Style} className="accordion-item">
                <h2 className="accordion-header">
                <button style={Style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3) What is Clear Text can do?
                </button>
                </h2>
                <div  id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Clear Text</strong> This is the facility use to clean the text written on the clipboard. 
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button className="btn btn-primary mb-5" onClick={toggleStyle}>{btnText}</button>
        </div> */}
        </div>
        
      
    </div>
  )
}
