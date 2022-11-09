import { useReducer} from 'react'
import './AddMovie.css'
import Button from './AplicationComponent/UI/Button'
import Input from './AplicationComponent/UI/Input'


function AddMovie(){
const inputTitle =  []
const inputOpeningText = []
const inputReleaseDate = []


const reduser = (state,action)=>{
return state
}




const [moviesData ,dispatch] =  useReducer(reduser,{
                                       id:1,title: '',
                                       openingText:'',
                                       releaseDate:'2015-05-18'},(int)=>int)

const moviesDataSender = ()=>{
    console.log(inputTitle)
    dispatch({
        id:inputTitle.current
    

    })
    console.log(moviesData)
}

return <form className='form' onSubmit={(e)=>e.preventDefault()}>
    <Input ref={inputTitle} type='text' title='Title' input={true} height='35px' ></Input>
    <Input ref={inputOpeningText} title='Opening Text' height='250px' ></Input>
    <Input ref={inputReleaseDate} type='date' title='Release Date' input={true} height='35px' ></Input>

    <Button onClick={moviesDataSender} height='45px' size='20px' default="10px" > AddMovies</Button>
</form>


}

export default AddMovie