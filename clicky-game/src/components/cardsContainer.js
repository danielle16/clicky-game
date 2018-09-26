import React, { Component } from "react";
import Card from "./../components/cards/Card";
import Wrapper from "./../Wrapper/Wrapper";
import characters from "characters.json";
import "./../App";


class App extends Component {
    state = {
        characters
    };

    render() {
        return (
            <Wrapper>
                <h1 className="title">Friends List</h1>
                {this.state.characters.map(character => (
                    <Card

                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </Wrapper>
        )
    }
}

    export default App;
