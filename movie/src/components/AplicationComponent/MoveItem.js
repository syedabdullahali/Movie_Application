import classes from './MovieItem.module.css'

function MoveItem(props) {

    return <div className={classes.move} >
        <div className={classes.contentParent}>

            {props.MoveData.map((el) => {
                return <MoveContent key={el.id} obj={el} />
            })}
        </div>
    </div>

}


function MoveContent(props) {

    return <div className={classes.content}>
        <h1>{props.obj.title}</h1>
        <p>{props.obj.openingText}</p>
    </div>


}

export default MoveItem