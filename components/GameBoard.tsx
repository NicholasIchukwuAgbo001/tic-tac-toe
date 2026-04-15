import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

interface GameBoardProps {
  board: Array<string | null>;
  winningLine: Array<number> | null;
  onCellPress: (index: number) => void;
  gameOver: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  winningLine,
  onCellPress,
  gameOver,
}) => {
  const renderRow = (rowIndex: number) => {
    const startIndex = rowIndex * 3;
    return (
      <View key={rowIndex} style={styles.row}>
        {board.slice(startIndex, startIndex + 3).map((cell, colIndex) => {
          const cellIndex = startIndex + colIndex;
          return (
            <Square
              key={cellIndex}
              value={cell}
              isWinning={winningLine?.includes(cellIndex) ?? false}
              onPress={() => onCellPress(cellIndex)}
              disabled={Boolean(gameOver || cell !== null)}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.board}>
      {renderRow(0)}
      {renderRow(1)}
      {renderRow(2)}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 5,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
  },
});

export default GameBoard;
