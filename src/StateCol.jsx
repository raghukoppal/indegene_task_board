import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.h4`
  padding: 8px;
`;
const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'inherit')}
flex-grow: 1;
min-height: 100px;
`;

const StateCol = ({ sectionId, section, tasks }) => {
  return (
    <Container>
      <Title>{section.title}</Title>
      <Droppable droppableId={sectionId}>
        {(provided, snapshot) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                index={index}
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
