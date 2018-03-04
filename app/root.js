import React, { Component } from "react";
import { Text } from "react-native";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";
import Game from "./containers/game";

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventsLoaded: false
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  async fetchEvents() {
    try {
      let response = await fetch(
        "https://historical-events-api.herokuapp.com/events"
      );
      let responseJson = await response.json();
      this.setState({
        events: responseJson,
        eventsLoaded: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { events, eventsLoaded } = this.state;

    return (
      <AnimatedLinearGradient
        customColors={presetColors.firefox}
        speed={4000}
      >
        {eventsLoaded ? (
          <Game events={events} />
        ) : (
          <Text>Loading Events...</Text>
        )}
      </AnimatedLinearGradient>
    );
  }
}
