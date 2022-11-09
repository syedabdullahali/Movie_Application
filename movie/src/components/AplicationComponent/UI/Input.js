import './Input.css'
import {useRef} from 'react'


 


function Input(props){
const inpputValue = useRef('')
const textareaValue = useRef('')

console.log(props)


const enterType =   props.input
             ?<input className="inputEnter" ref={inpputValue} type={props.type} style={{height:props.height}}/>
             :<textarea ref={textareaValue} className="inputEnter textareaEnter" style={{height:props.height}}/>

return <div className="inputParent" >
<label className="inputTitle">{props.title}</label>
{enterType}
</div>

}


export default Input