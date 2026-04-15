import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GameBoard, GameStatus, RestartButton, GameTitle } from "./components";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState<boolean>(true);

  const [winningLine, setWinningLine] = useState<Array<number> | null>(null);

  const checkWinner = (squares: Array<string | null>): string | null => {
    for (const [first, second, third] of WINNING_COMBINATIONS) {
      if (
        squares[first] &&
        squares[first] === squares[second] &&
        squares[first] === squares[third]
      ) {
        return squares[first];
      }
    }
    return null;
  };

  const handleCellPress = (index: number) => {
    const winner = checkWinner(board);
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
  };

  const winner = checkWinner(board);

  if (winner && !winningLine) {
    for (const [first, second, third] of WINNING_COMBINATIONS) {
      if (
        board[first] &&
        board[first] === board[second] &&
        board[first] === board[third]
      ) {
        setWinningLine([first, second, third]);
        break;
      }
    }
  }

  const isDraw = !winner && board.every((cell) => cell !== null);
  const gameOver = Boolean(winner || isDraw);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <GameTitle />

      <GameStatus winner={winner} isDraw={isDraw} isXNext={isXNext} />

      <GameBoard
        board={board}
        winningLine={winningLine}
        onCellPress={handleCellPress}
        gameOver={gameOver}
      />

      <RestartButton onPress={restartGame} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
