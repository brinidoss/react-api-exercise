
import './App.css';
import { Quotes } from './components/Quotes/Quotes';
import { WeatherForecast } from './components/Weather/WeatherForecast';

function App() {
  return (
    <div className="App">
      <WeatherForecast/>
      <Quotes/>
    </div>
  );
}

export default App;
