import './Button.module.css'

function Button(props) {

    return <button style={{
        height: props.height,
        fontSize: props.size,
        padding: props.default,
        width: props.width
    }}
        onClick={props.onClick}>{props.children}</button>


}

export default Button