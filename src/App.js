import './App.css';
import Tombol from './components/Tombol';

function App() {
  const myName = "Afida";
  const myName2 = "Dian";
  const myName3 = "Tiara";
  return (
    <div className="App">
      <header className="App-header">
      <h1>Tugas 4</h1>
      <Tombol nama={myName}/>
      <Tombol nama={myName2}/>
      <Tombol nama={myName3}/>
      </header>
    </div>
  );
}

export default App;
