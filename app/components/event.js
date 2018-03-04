import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { string } from "prop-types";

const Event = ({ text }) => (
  <View style={styles.event}>
    <Text style={styles.eventText}>{text}</Text>
  </View>
)

Event.propTypes = { text: string.isRequired }

const styles = StyleSheet.create({
  event: {
    width: "100%",
    height: "40%",
    justifyContent: "center"
  },
  eventText: {
    textAlign: "center",
    fontSize: 28,
    color: "white"
  }
});

export default Event;
