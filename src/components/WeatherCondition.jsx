import React, { useEffect, useState } from 'react'
import axios from 'axios'



const WeatherCondition = ({lat, lon}) => {

  // const randomElements = array =>{
  //   const indexR = Math.floor(Math.random() * array.length)
  //   return array[indexR]

  // }

  // let colors = randomElements(arrayColors)

  const [condition, setCondition] = useState() 
  const [temperaturechange, setTemperaturechange] = useState()
  const [changedegreecelsius, setChangedegreecelsius] = useState(true)
  // const [randomColor, setRandomColor] = useState(colors)

  useEffect(() => {

    if(lon){
        const APIKey ='636bee75fa9d54b0975781c6a7e80182'
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    
        axios.get(URL)
        .then(res => {
          setCondition(res.data)
          // const randomColors = {
          //   colors : randomColor
          // }
          const temperture = {
          cel : `${Math.floor(res.data.main.temp - 273.15)} °C`,
          far : `${Math.floor((res.data.main.temp - 273.15) * 9/5 + 32)} °F`
        }
          setTemperaturechange(temperture)
          // setRandomColor(randomColors)
         
        })
        .catch(err => console.log(err))
    }
}, [lat, lon])
    console.log(condition);     
     

    const goToButton = () => {
      setChangedegreecelsius(!changedegreecelsius)
      // setRandomColor(randomColor)
      
      // setRandomColor(colors)
    }
     return(
    
    <article>
        <h2>{condition?.name},{condition?.sys.country}</h2>
        
      <div className='containerTwo'>
          <div className='img'>
            <img src={`http://openweathermap.org/img/wn/${condition && condition?.weather[0].icon}@4x.png`} alt="" />
         </div>
         <div className='subcontainertwo'>
            <span className='spanTitle'>Length : </span> <span className='spanresult' >{condition?.coord.lat}</span> 
            <span className='spanTitle'>Latitude :</span> <span className='spanresult' >{condition?.coord.lon}</span> 
            <span className='spanTitle'>clouds : </span> <span className='spanresult' >{condition?.clouds.all}&#37;</span>
          
          </div>
       </div>
       <div className='containerThree'>
          <div>
          <h3>{changedegreecelsius ? temperaturechange?.cel : temperaturechange?.far}</h3>
          </div>
          <div>
          <button onClick={goToButton}>{changedegreecelsius ? 'Change to °F' : 'Change to °C'}</button>
          </div>
      </div>
    </article>
  )
}

export default WeatherCondition