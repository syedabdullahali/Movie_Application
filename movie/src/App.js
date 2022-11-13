import { useState,useCallback } from 'react';
import Header from './components/AplicationComponent/Header'
import MoveItem from './components/AplicationComponent/MovieItem'
import './App.css';
import AddMovie from './components/AddMovie';

const startingContent = [
{
id:1,
title: '',
openingText:'',
releaseDate:'2015-05-18'
},]


function App() {
 
  const [loading, setServerState]  =  useState("Welcome! Please Click above Movies Button to see movies") 
  startingContent[0].openingText = loading
  const [updateMoveData,setMoveData] = useState(startingContent)




  const   fetchDummyMoveData=  useCallback(async ()=>{
    setServerState('Loading....')
  
 try{

    const  response =  await fetch('https://movie-app-6cc69-default-rtdb.firebaseio.com/movies.json')
  


  if(!response.ok){
    throw new Error("Something went wrong!☄️")
  }
  const  moviesData  =  await response.json()

  const loadedMovies = []

  for(const key in moviesData){
    loadedMovies.push({
      id:key,
      title:moviesData[key].title,
      openingText:moviesData[key].openingText,
      releaseDate:moviesData[key].releaseDate

    })
  } 

 
    
  setMoveData(loadedMovies)
  
}catch(error){
  setServerState(error.message )
}

  },[])

  

  return (
<div className="App"> 

<div className='sizecontroler'>
<div className='size'>
    <Header onClick={fetchDummyMoveData}/>
    <MoveItem MoveData={updateMoveData} />
</div>
<AddMovie/> 

</div>
</div> 
  );
}

export default App;
