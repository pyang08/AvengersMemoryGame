import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard"
import Avengers from "./Avengers.json"

const App = () => (
  <Wrapper>
    <Title>Avengers Memory Game</Title>

    {/* Elegant */}
    { Avengers.map( (avenger) => <FriendCard 
        image={ avenger.image } 
      /> 
    )}




  </Wrapper>
);

export default App;
