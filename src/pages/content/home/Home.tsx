import { DndContext } from '@dnd-kit/core';

import { Board } from 'widgets/board';

const Home = () => {
  const handleDragEnd = (event) => {
    const { over } = event;

    if (over) {
      const overId = over.id; // ID of the droppable area
      // logic to handle dropping draggable item
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Board />
    </DndContext>
  );
};

export default Home;
