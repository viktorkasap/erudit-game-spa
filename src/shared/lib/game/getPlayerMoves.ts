export const getPlayerMoves = (playerMoves: [string, string][]) =>
  playerMoves.map((move) => {
    const moves = move[0].split('-').map(Number);

    return { indexRow: moves[0], indexCell: moves[1], tail: move[1] };
  });
