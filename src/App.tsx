
import './App.css';
import { BobRossSayings } from './components/BobRoss/BobRoss';
import { Quotes } from './components/Quotes/Quotes';
import { WeatherForecast } from './components/Weather/WeatherForecast';

function App() {
  return (
    <div className="App">
      <WeatherForecast/>
      <Quotes/>
      <BobRossSayings/>
    </div>
  );
}

export default App;
