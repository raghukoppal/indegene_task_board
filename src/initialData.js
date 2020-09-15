const initialData = {
  tasks: {
    task1: {
      id: 'task1',
      content: 'Option to include item string in mapped task name',
      openedBy: '#2100 opened by joeschmid',
    },
    task2: {
      id: 'task2',
      content: 'Add cloud integration tests to CI',
      openedBy: '#2792 opened by jcrist',
    },
    task3: {
      id: 'task3',
      content: 'Consider removing default storage labels for environments',
      openedBy: '#2888 opened by joshmeek',
    },
    task4: {
      id: 'task4',
      content: 'Extend configuration validation option to all agents',
      openedBy: '#2889 opened by joshmeek',
    },
  },
  taskSections: {
    section1: {
      id: 'section1',
      title: 'Added',
      taskIds: ['task1', 'task2', 'task4'],
    },
    section2: {
      id: 'section2',
      title: 'In Progress',
      taskIds: ['task3'],
    },
    section3: {
      id: 'section3',
      title: 'Committed',
      taskIds: [],
    },
    section4: {
      id: 'section4',
      title: 'Completed',
      taskIds: [],
    },
  },
  sectionOrder: ['section1', 'section2', 'section3', 'section4'],
};

export default initialData;
