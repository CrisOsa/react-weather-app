import './App.css';
import WeatherInput from './components/WeatherData'

export default function App() {
  return (
   
   <div className="App">
     <div className='body'>
       <div className='headings'>
        <p className='weather'>Weather:</p>
        <p className='temperature'>Temperature</p>
        <p className='humidity'>Humidity</p></div>
        <WeatherInput />
      </div> 
    </div>
    
  );
}