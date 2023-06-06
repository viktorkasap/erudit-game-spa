import { useDraggable, useDroppable } from '@dnd-kit/core';

import { createStyles, Flex } from '@mantine/core';

export const Rack = () => {
  const { classes } = useStyles();
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const { isOver, setNodeRef } = useDroppable({
    id: 'rack',
  });
  const style = {
    backgroundColor: isOver ? 'lightgreen' : undefined,
  };

  return (
    <Flex className={classes.rack} justify="center" align="center" mt="lg" p="md" gap="0.125rem" ref={setNodeRef} style={style}>
      {letters.map((letter, index) => (
        <RackLetter key={letter + index} letter={letter} />
      ))}
    </Flex>
  );
};

const RackLetter = ({ letter }: { letter: string }) => {
  const { classes, cx } = useStyles();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${letter}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className={cx(classes.rackLetter, { [classes.rackLetterGrabbed]: transform })}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}>
      {letter}
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  rack: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.indian[4],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.indian[2],
  },

  rackLetter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    fontSize: theme.fontSizes.xl,
    textTransform: 'uppercase',
    fontWeight: 600,
    backgroundColor: theme.colors.dark[7],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
    color: theme.white,
    cursor: 'grab',
  },

  rackLetterGrabbed: {
    cursor: 'grabbing',
    backgroundColor: theme.colors.dark[5],
  },
}));
