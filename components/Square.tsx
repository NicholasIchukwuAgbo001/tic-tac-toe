import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface SquareProps {
  value: string | null;
  onPress: () => void;
  isWinning: boolean;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({
  value,
  onPress,
  isWinning,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cell, isWinning && styles.winningCell]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.cellText,
          value === "X" && styles.xText,
          value === "O" && styles.oText,
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderRadius: 5,
  },
  winningCell: {
    backgroundColor: "#90EE90",
  },
  cellText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  xText: {
    color: "#FF6B6B",
  },
  oText: {
    color: "#4ECDC4",
  },
});

export default Square;
