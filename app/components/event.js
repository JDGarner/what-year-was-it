import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { string } from "prop-types";

const Event = ({ text }) => (
  <Text style={styles.event}>
    {text}
  </Text>
)

Event.propTypes = { text: string.isRequired }

const styles = StyleSheet.create({
  event: {
    color: "red"
  }
});

export default Event;
