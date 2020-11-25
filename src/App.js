import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">

      <Greet name="Richie" relation="Me">
        <p>This is children properties</p>
      </Greet>
      <Greet name="Sasha" relation="GF">
        <button>Voila!</button>
      </Greet>
      <Greet name="Rach" relation="Sister" />

      <Welcome name="Richie" relation="Me">

      </Welcome>
      
      <Welcome name="Sasha" relation="GF">

      </Welcome>
      
      <Welcome name="Rach" relation="Sister">

      </Welcome>

    </div>
  );
}

export default App;
