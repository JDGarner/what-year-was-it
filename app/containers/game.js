import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { array } from "prop-types";
import { shuffleArray } from "../utils";
import Event from "../components/event";
import Answer from "../components/answer";

export default class Game extends Component {
  constructor(props) {
    super(props);

    const currentEventIndex = 0;
    const { description, year } = props.events[currentEventIndex];
    const answers = this.generateAnswers(year);

    this.state = {
      currentEventIndex,
      currentEvent: description,
      answers
    };
  }

  static propTypes = {
    events: array.isRequired
  };

  generateAnswers(correctYear) {
    const answers = [{ year: correctYear, isCorrect: true }];
    for (let i = 0; i < 3; i++) {
      const year = this.getRandomYear(correctYear);
      answers.push({ year, isCorrect: false });
    }
    return shuffleArray(answers);
  }

  getRandomYear(correctYear) {
    const range = 10;
    const offset = Math.round(Math.random() * range - range / 2);
    return correctYear + offset;
  }

  onClickAnswer() {
    const newEventIndex =
      (this.state.currentEventIndex + 1) % this.props.events.length;
    const { description, year } = this.props.events[newEventIndex];
    const answers = this.generateAnswers(year);

    this.setState({
      currentEventIndex: newEventIndex,
      currentEvent: description,
      answers
    });

    // increment/decrement score
  }

  renderAnswers(answers) {
    return answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          onClickAnswer={() => this.onClickAnswer()}
          year={answer.year}
          isCorrect={answer.isCorrect}
        />
      );
    });
  }

  render() {
    const { currentEvent, answers } = this.state;

    return (
      <View style={styles.game}>
        <Event text={currentEvent} />
        <View style={styles.answers}>
          {this.renderAnswers(answers)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    height: "100%",
    marginLeft: "7%",
    marginRight: "7%"
  },
  answers: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "60%"
  }
});
