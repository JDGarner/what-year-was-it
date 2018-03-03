import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { string } from "prop-types";

const Answer = ({ text }) => (
  <Text style={styles.answer}>
    {text}
  </Text>
)

Answer.propTypes = { text: string.isRequired }

const styles = StyleSheet.create({
  answer: {
    color: "blue"
  }
});

export default Answer;
