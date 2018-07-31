import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import FriendCard from "./components/FriendCard"
import Avengers from "./Avengers.json";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    Avengers,
    score: 0,
    highscore: 0
  };

    // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Title >Avengers Memory Game
        </Title>

        <Score>
        Highscore= {this.state.highscore}
        <br />
        Current Score= {this.state.score}
        </Score>

        {this.state.Avengers.map(avenger => (
          <FriendCard
            clickCounter={this.clickCounter}
            id={avenger.id}
            key={avenger.id}
            image={avenger.image}
          />
        ))}
      </Wrapper>
    );
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.Avengers.forEach(card => {
      card.count = 0;
    });
    alert(`GAME OVER! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCounter = id => {
    this.state.Avengers.find((o, i) => {
      if (o.id === id) {
        if(Avengers[i].count === 0){
          Avengers[i].count = Avengers[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.Avengers.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
}

export default App;