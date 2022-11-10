import './Input.css'
import React from 'react'

const Input = React.forwardRef(function (props, ref) {

    const enterType = props.input
        ? <input className="inputEnter"
            ref={ref} type={props.type}
            style={{ height: props.height }} />

        : <textarea ref={ref}
            className="inputEnter textareaEnter"
            style={{ height: props.height }} />

    return <div className="inputParent" >
        <label className="inputTitle">{props.title}</label>
        {enterType}
    </div>

}
)

export default Input