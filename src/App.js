import logo from './logo.svg';
import './App.css';
import IMCForm from './components/IMCForm/IMCForm';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = "IMC";
  },[])
  return (
    <div className="App">
      <header className="App-header" title="IMC">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
      <IMCForm />
      </body>
    </div>
  );
}

export default App;
