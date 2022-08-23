import { useEffect, useState } from 'react'
import './App.css'
import   WeatherCondition from  './components/WeatherCondition'
import arrayColors from './color/arrayColors'
import MainHeader from './components/MainHeader'

function App() {
  
   const randomElements = array =>{
     const indexR = Math.floor(Math.random() * array.length)
     return array[indexR]

   }
   let colors = randomElements(arrayColors)

   
   const [axis, setAxis] = useState()
   const [randomColor, setRandomColor] = useState(colors)



useEffect(() =>{
  const backColor = {
    background: randomColor
   }
   setRandomColor(backColor)
   console.log(backColor.background);
},[])

  useEffect(() => {
    // const backColor = {
    //   background: randomColor
    //  }
    //  setRandomColor(backColor)
    //  console.log(backColor.background);

    const success = pos =>{
  
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setAxis(latlon)
    } 
    navigator.geolocation.getCurrentPosition(success)
    
  }, [])
  
  return (
    <div className="App" >
       <MainHeader /> 
       <WeatherCondition lon={axis?.lon} lat={axis?.lat}
      //  randomColor={randomColor}
       />
    </div>
  )
}

export default App

