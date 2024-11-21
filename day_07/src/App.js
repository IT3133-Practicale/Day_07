import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [childName,setChildName]-useState("Default");
  const receiveName=(name)=>{
  setChildName(name);
  }
  return (
    <div className="App">
      <h1>Hello, I'm Parent</h1>
    </div>
  );
}

export default App;
