import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import { Jumbotron, Container } from "reactstrap";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(function (response) {
        console.log("response.data", response.data.results);
        setChar(response?.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div className="jumbo">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">The Characters</h1>
            <p className="lead">A Rick and Morty Api</p>
            <div className="imgHolder"></div>
          </Container>
        </Jumbotron>
      </div>

      <Character char={char} />
    </div>
  );
};

export default App;
