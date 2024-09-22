import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import toast from 'react-hot-toast';
import { Chess, Move, Square } from 'chess.js'; // Import types from chess.js
import { Box, Button, Typography } from '@mui/material';

// Define the shape of the drop event
interface DropEvent {
  sourceSquare: Square;
  targetSquare: Square;
}

const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess()); // Initialize a new Chess game
  const [fen, setFen] = useState<string>('start'); // FEN notation to track the position
  const [moveHistory, setMoveHistory] = useState<string[]>([]); // Track move history
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // Check if the game is over
  const [isUserTurn, setIsUserTurn] = useState<boolean>(true); // User plays as White

  const onDrop = ({ sourceSquare, targetSquare }: DropEvent) => {
    const piece = game.get(sourceSquare);
    if (!piece) {
      console.log(`No piece at source square: ${sourceSquare}`);
      return;
    }
  
    console.log(`Attempting to move ${piece.color} ${piece.type} from ${sourceSquare} to ${targetSquare}`);
  
    // Determine if the move involves a pawn promotion
    const isPromotion = piece.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1');
  
    // Validate that the target square is legal for the current piece
    const legalMoves = game.moves({ square: sourceSquare, verbose: true });
    const isLegalMove = legalMoves.some((move) => move.to === targetSquare);
  
    if (!isLegalMove) {
      console.log(`Move from ${sourceSquare} to ${targetSquare} is not legal.`);
      toast.error('Invalid move! Please try again.');
      return;
    }
  
    // Attempt the move and validate it
    const move: Move | null = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: isPromotion ? 'q' : undefined,
    });
  
    // If the move is invalid (move returns null), restrict the move
    if (move === null) {
      console.log('Invalid move:', { from: sourceSquare, to: targetSquare });
      return;
    }
  
    // Update game state
    setFen(game.fen());
    setMoveHistory((prevHistory) => [...prevHistory, move.san]);
  
    // Check if the game is over
    if (game.isGameOver()) {
      setIsGameOver(true);
    } else {
      setIsUserTurn(false);
    }
  };
  
  



  // Computer makes a random move
  useEffect(() => {
    if (!isUserTurn && !isGameOver) {
      const timeoutId = setTimeout(() => {
        const legalMoves = game.moves();
        const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
        game.move(randomMove);
        setFen(game.fen());
        setMoveHistory((prevHistory) => [...prevHistory, randomMove]);
        setIsUserTurn(true);

        // Check if game over after computer move
        if (game.isGameOver()) {
          setIsGameOver(true);
        }
      }, 1000);

      return () => clearTimeout(timeoutId); // Clean up timeout
    }
  }, [isUserTurn, game, isGameOver]);

  // Restart the game
  const handleRestart = () => {
    setGame(new Chess());
    setFen('start');
    setMoveHistory([]);
    setIsGameOver(false);
    setIsUserTurn(true);
  };

  // Resign
  const handleResign = () => {
    toast.success('You have resigned.');
    setIsGameOver(true);
    window.location.href = '/';
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Play Chess</Typography>

      {/* Chessboard */}
      <Chessboard
        position={fen}
        onDrop={onDrop}
        width={500}
        orientation="white"
        draggable={true}
        boardStyle={{
          borderRadius: '5px',
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
        dropSquareStyle={{ boxShadow: 'inset 0 0 1px 4px rgb(255, 255, 0)' }} // Highlight possible moves
      />

      {/* Move History */}{/*}
      <Typography variant="h6" gutterBottom>Move History:</Typography>
      <Box sx={{ maxHeight: 200, overflowY: 'auto', marginBottom: 2 }}>
        {moveHistory.map((move, index) => (
          <Typography key={index} variant="body1">{index + 1}. {move}</Typography>
        ))}
      </Box>
{*/}
      {/* Buttons for Resign, Restart */}
      <Box sx={{marginTop: 4, marginBottom: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestart}
          sx={{marginRight: 4 }}
        >
          Restart Game
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleResign}>
          Resign
        </Button>
      </Box>

      {/* Game Over */}
      {isGameOver && (
        <Typography variant="h5" color="error" sx={{ marginTop: 2 }}>
          Game Over!
        </Typography>
      )}
    </Box>
  );
};

export default ChessGame;
