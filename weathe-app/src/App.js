import {useState , useEffect} from 'react';
import './index.css';

const App = ()=>{
  const city_name ='tripoli'
  const API_key ='69537ab0815d8306bb4a008542f90f01'
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`; 
  const [weather,setWeather]=useState([])


  const fetchApi = async ()=>{
    try {
    const response = await fetch (url)
    const data = await response.json();
    console.log(data);
      setWeather(data);
    } catch (error) {
    console.log(error);
    }
}
useEffect(() =>{
  fetchApi()
  
},[]) 
//(fTemp - 32) * 5 / 9

  return(
    <main className="App">
      <section className="mai">
        <h2>{weather.main.temp}</h2>
        <h4>min: <span>{weather.main.temp_min}</span><br/>
        max:<span>{weather.main.temp_max}</span>
        </h4>
        <div>
        <h2>{weather.weather[0].description}</h2>
        <h4>humidity : {weather.main.humidity}</h4>
        </div>
        <h4>{weather.name} /  <span>{weather.sys.country}</span></h4>
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