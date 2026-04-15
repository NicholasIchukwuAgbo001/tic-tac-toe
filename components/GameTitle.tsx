import React from "react";
import { StyleSheet, Text } from "react-native";

const GameTitle: React.FC = () => {
  return <Text style={styles.title}>Tic Tac Toe</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
});

export default GameTitle;
