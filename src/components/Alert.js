import React from 'react'

export default function Alert(props) {
    
  return (
    props.myAlert && <div  className="d-flex flex-row-reverse">
        <div class={`alert w-25 alert-${props.myAlert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.myAlert.type}</strong> :{props.myAlert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>
  )
}
