import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 260px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

const StateCol = ({ sectionId, section, tasks }) => {
  return (
    <Container>
      <Title>{section.title}</Title>
      <Droppable droppableId={sectionId}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                index={index}
                id={task.id}
                content={task.content}
                openedBy={task.openedBy}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default StateCol;
