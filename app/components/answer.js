import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { number, bool, func } from "prop-types";

const Answer = ({ year, isCorrect, onClickAnswer }) => (
  <TouchableOpacity onPress={onClickAnswer} style={styles.answerButton}>
    <Text style={styles.answerText}>{year}</Text>
  </TouchableOpacity>
);

Answer.propTypes = {
  year: number.isRequired,
  isCorrect: bool.isRequired,
  onClickAnswer: func.isRequired
};

const styles = StyleSheet.create({
  answerButton: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "white"
  },
  answerText: {
    fontSize: 26,
    color: "white"
  }
});

export default Answer;
