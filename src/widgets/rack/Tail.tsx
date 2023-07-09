import { useStore } from 'effector-react';

import { setCell } from 'entities/board';
import { $selectedCell, setSelectedCell } from 'entities/cell';
import { $game } from 'entities/game';
import { removePlayerTail, addPlayerMove } from 'entities/players';
import { $selectedRackTail, setSelectedTail, Tail as TailComponent } from 'entities/tail';

import { letters } from 'shared/lib';
import { GamePlayer } from 'shared/types';

export const Tail = ({ index, tail }: TailProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);

  const { turn } = useStore($game);

  const handleSelected = ({ index, letter }: { index: number; letter: string }) => {
    if (selectedCell) {
      removePlayerTail({ player: turn as GamePlayer, tailIndex: index });
      addPlayerMove({
        letter,
        player: turn as GamePlayer,
        position: `${selectedCell.indexRow}-${selectedCell.indexCell}`,
      });

      setSelectedCell(null);
      setSelectedTail(null);
      setCell({ indexRow: selectedCell.indexRow, indexCell: selectedCell.indexCell, letter });

      return;
    }

    if (selectedTail === null || selectedTail?.index !== index) {
      setSelectedTail({ index, letter });
    } else {
      setSelectedTail(null);
    }
  };

  return (
    <TailComponent
      value={letters[tail].value}
      isSelected={selectedTail?.index === index}
      onClick={() => handleSelected({ index, letter: tail })}>
      {tail}
    </TailComponent>
  );
};

interface TailProps {
  index: number;
  tail: string;
}
