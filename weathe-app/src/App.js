import {useState , useEffect,useRef} from 'react';
import { gsap,Power2,Timeline } from "gsap";
import './index.css';

//new_key = 8550103399f6481388a4ebb996bc57b3

//https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=8550103399f6481388a4ebb996bc57b3
//new_api = `https://api.weatherbit.io/v2.0/forecast/daily?city=benghazi&key=${new_key}`



const App = ()=>{
  const [contry,setContry]=useState('')
  let city_name = 'tripoli'
  const API_key ='69537ab0815d8306bb4a008542f90f01'
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`; 
  
  const [weather,setWeather]=useState([])
  const [temperature,setTemperature]=useState(null)
  const [loading,setLoading]=useState(true)
let tee = useRef(null)
  
  
    
    const fetchApi = async ()=>{
      setLoading(true)
      try {
      const response = await fetch (url)
      const data = await response.json();
      console.log(data);
      setTemperature(Math.floor((data.main.temp - 273.15)))
     // console.log(data);
        setWeather(data);
        setLoading(false)
        city_name = contry
      } catch (error) {
      console.log(error);
      }

  }
  useEffect(()=>{
      fetchApi ()
      Timeline.fromTo(tee, 0, {height:"0%"},{height:"100%"}); 
      
},[])
  /* let tl = new TimelineLite()
  tl.to(tee, 1, {height:"0%"},{height:"100%"}); */

const search = (e)=>{
  e.preventDefault();
  const fetchApi = async ()=>{
    setLoading(true)
    try {
      //`http://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=${API_key}`
      //`pro.openweathermap.org/data/2.5/forecast/hourly?q=${contry}&appid=${API_key}`
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=${API_key}`)
    const data = await response.json();
    
    setTemperature(Math.floor((data.main.temp - 273.15)))
   // console.log(data);
      setWeather(data);
      setLoading(false)
      city_name = contry
      setContry('')
    } catch (error) {
    console.log(error);
    }

}
fetchApi()
}

if(loading){
  return(
    <div className="loading">
       <h1 >loading.....</h1>
    </div>
  )
}


  

  return(
    <main className="App">
      <form action="" className='form' onSubmit={search}>
        <input 
        type="text"
        placeholder="Search...." 
        className='input' 
        value={contry} 
        onChange={(e)=>setContry(e.target.value)}
        
      />
      </form>
      <section className="mai" ref={el=>tee = el}>
        <h4>{weather.name} /  <span>{weather.sys.country}</span></h4>
        <h2>{temperature}°C</h2>
        <h4 className='min-max'>min:<span>{Math.floor(weather.main.temp_min - 273.15)}°c</span>
                                max:<span>{Math.floor(weather.main.temp_max - 273.15)}°c</span>
        </h4>
        <div className='description'>
        <h2>{weather.weather[0].description}</h2>
        <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
        <h4>humidity : {weather.main.humidity}</h4>
        </div>
        
      </section>
  </main>
  )
}
export default App;

/*api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//http://api.openweathermap.org/data/2.5/weather?q=tripoli&appid=69537ab0815d8306bb4a008542f90f01
 /*const response = await fetch ('http://api.weatherstack.com/current?access_key=8a138b8315654b2df845003e89069cac&query=New%20York') */
/*const API_key ='69537ab0815d8306bb4a008542f90f01'
const city_name ='tripoli'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`; 


function App() {
  const [weather,setWeather]=useState([])
  const fetchApi = async ()=>{
    try {
    const response = await fetch (url)
    const data = await response.json();
      setWeather(data);
    } catch (error) {
    console.log(error);
    }
}
useEffect(() =>{
  fetchApi()
  
},[]) 
//console.log(weather.main.temp);
  return (
    <main className="App">
      <section className="mai">
        <h2>{weather.main.temp}</h2>
        <div>
        <h2>{weather.weather.description}</h2>
        </div>
        <h4>{weather.name}</h4><span>{weather.sys.country}</span>
      </section>
    </main>
  );
}

export default App;*/ 