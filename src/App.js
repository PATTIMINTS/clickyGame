import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        rORw: "",
        clicked: [],


    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };
    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            rORw: ""
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }
        else if (newScore === 11) {
            this.setState({ rORw: "You win!" });
        }

        this.handleShuffle();
    }; handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            rORw: "Later Boners!",
            clicked: []
        });
        this.handleShuffle();
    };
    
    handleShuffle = () => {
        let shuffledFriends = shuffleFriends(friends);
        this.setState({ friends: shuffledFriends });
    };


    render() {
        return (
            <Wrapper>
                <Nav
                    title="It's Always Sunny Friends click Game"
                    score={this.state.currentScore}
                    topScore={this.state.topScore}
                    rORw={this.state.rORw}>
                </Nav>
                <Title>Click on each character once.</Title>
                {this.state.friends.map(friend => (
                    <FriendCard

                        id={friend.id}
                        key={friend.id}
                        handleClick={this.handleClick}
                        handleIncrement={this.handleIncrement}
                        handleReset={this.handleReset}
                        handleShuffle={this.handleShuffle}
                        name={friend.name}
                        image={friend.image}

                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;