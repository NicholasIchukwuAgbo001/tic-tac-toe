import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface RestartButtonProps {
  onPress: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.restartButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.restartButtonText}>Restart Game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restartButton: {
    backgroundColor: "#4ECDC4",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  restartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestartButton;
