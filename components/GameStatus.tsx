import React from "react";
import { StyleSheet, Text } from "react-native";

interface GameStatusProps {
  winner: string | null;
  isDraw: boolean;
  isXNext: boolean;
}

const GameStatus: React.FC<GameStatusProps> = ({ winner, isDraw, isXNext }) => {
  const getMessage = () => {
    if (winner) {
      return `Player ${winner} wins! 🎉`;
    }
    if (isDraw) {
      return "It's a draw! 🤝";
    }
    return `Player ${isXNext ? "X" : "O"}'s turn`;
  };

  return <Text style={styles.status}>{getMessage()}</Text>;
};

const styles = StyleSheet.create({
  status: {
    fontSize: 20,
    color: "#666",
    marginBottom: 30,
    fontWeight: "600",
  },
});

export default GameStatus;
