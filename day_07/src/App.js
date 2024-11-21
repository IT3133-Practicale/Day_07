import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Child from './Components/Child'

function App() {
  const [childName,setChildName]-useState("Default");
  const receiveName=(name)=>{
  setChildName(name);
  }
  return (
    <div className="App">
      <h1>Hello, I'm Parent</h1>
      <Child setfun={receiveName}></Child>
      <p>Parent: My child said: {childName}</p>
    </div>
  );
}

export default App;
