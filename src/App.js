import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import '@atlaskit/css-reset';
import initialData from './initialData';
import StateCol from './StateCol';
import './App.css';

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const [data, setData] = useState(initialData);
  const onDragEnd = (result) => {
    console.log('result', result);
    const { destination, source, draggableId } = result;
    console.log('draggableId', draggableId);
    console.log('droppableId', source.droppableId);
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = data.taskSections[source.draggableId];
    const finish = data.taskSections[destination.droppableId];

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState = {
      ...data,
      taskSections: {
        ...data.taskSections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
    return;
  };
  return (
    <Container>
      {data.sectionOrder.map((sectionId) => {
        const section = data.taskSections[sectionId];
        const tasks = section.taskIds.map((taskId) => data.tasks[taskId]);
        return (
          <DragDropContext onDragEnd={onDragEnd} key={sectionId}>
            <StateCol
              key={section.id}
              sectionId={section.id}
              section={section}
              tasks={tasks}
            />
          </DragDropContext>
        );
      })}
    </Container>
  );
};

export default App;
