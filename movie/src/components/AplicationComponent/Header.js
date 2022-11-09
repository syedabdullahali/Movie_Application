import classes from './Header.module.css'
import Button from './UI/Button'

function Header(props){

return <div className={classes.header}>
      <Button onClick={props.onClick}>Movies</Button>
</div>

}


export default Header