import React,{useEffect,useState} from 'react';
import axios from "axios";
import './App.css';
import Character from './components/Character';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [res, setRes] = useState([]);




  
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
   axios.get('https://rickandmortyapi.com/api/character/')
  .then(function (response) {
    console.log("response",response);
    setRes(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  },[]);

  console.log(res);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={res}/>
    </div>
  );
}


export default App;
