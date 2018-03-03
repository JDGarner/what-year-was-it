import React, { Component } from "react";
import { View } from "react-native";
import Event from "../components/event";
import Answer from "../components/answer";

export default class Game extends Component {

  // Takes a list of events and years
  // Pass them one by one into 

  onAnswer() {
    // increment/decrement score

    // get next event
    // generate wrong answers
    // answers = [ { text: "1942", correct: true }, { text: "1945", correct: false }]
    // set state
  }

  renderAnswers(answers) {
    return answers.map(answer => {
      <Answer text={answer} />
    })
  }

  render() {
    const { currentEvent, answers } = this.state;

    return (
      <View>
        <Event text={currentEvent} />
        { renderAnswers(answers) }
      </View>
    );
  }
}
