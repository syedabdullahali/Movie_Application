import { useRef } from 'react'
import './AddMovie.css'
import Button from './AplicationComponent/UI/Button'
import Input from './AplicationComponent/UI/Input'


function AddMovie() {
    const inputTitle = useRef('')
    const inputOpeningText = useRef('')
    const inputReleaseDate = useRef("")


    const addMoveHnadler = async () => {
        const moviesData = {
            title: inputTitle.current.value,
            openingText: inputOpeningText.current.value,
            releaseDate: inputReleaseDate.current.value
        }

        const response = await fetch('https://movie-app-6cc69-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(moviesData),
            headers: { 'Content-Type': 'application/json' }
        })

        const data = await response.json()
        console.log(data)
    }


    return <form className='form' onSubmit={(e) => e.preventDefault()}>
        <Input ref={inputTitle} type='text' title='Title' input={true} height='35px' ></Input>
        <Input ref={inputOpeningText} title='Opening Text' height='250px' ></Input>
        <Input ref={inputReleaseDate} type='date' title='Release Date' input={true} height='35px' ></Input>
        <Button onClick={addMoveHnadler} height='45px' width="100%"  size='20px' default="10px" > AddMovies</Button>
    </form>


}

export default AddMovie