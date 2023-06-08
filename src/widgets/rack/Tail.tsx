import { useStore } from 'effector-react';

import { $selectedRackTail, setSelectedTail, Tail as TailComponent } from 'entities/tail';

export const Tail = ({ index, tail }: TailProps) => {
  const selectedTail = useStore($selectedRackTail);
  const handleSelected = ({ index, letter }: { index: number; letter: string }) => {
    if (selectedTail === null || selectedTail.index !== index) {
      setSelectedTail({ index, letter });
    } else {
      setSelectedTail(null);
    }
  };

  return (
    <TailComponent isSelected={selectedTail?.index === index} onClick={() => handleSelected({ index, letter: tail })}>
      {tail}
    </TailComponent>
  );
};

interface TailProps {
  index: number;
  tail: string;
}
