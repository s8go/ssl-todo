const initialState = {
  allTasks: [],
  completed: [],
  uncompleted: [],
};

export default function reducerFn(state = initialState, action) {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
        completed: [
          ...state.allTasks.filter((task) => task.completed === true),
        ],
        uncompleted: [
          ...state.allTasks.filter((task) => task.completed === false),
          action.payload,
        ],
      };
    case "delete":
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => {
          return task.id !== action.payload.id;
        }),
        completed: state.completed.filter((task) => {
          return task.id !== action.payload.id;
        }),
        uncompleted: state.uncompleted.filter((task) => {
          return task.id !== action.payload.id;
        }),
      };

    case "edit":
      return {
        ...state,
        allTasks: state.allTasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return task;
          }
        }),
        completed: state.completed.map((task) => {
          if (task.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return task;
          }
        }),
        uncompleted: state.uncompleted.map((task) => {
          if (task.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return task;
          }
        }),
      };
    case "login":
      return {
        ...action.payload,
      };

    case "clear":
      return {
        allTasks: [],
        completed: [],
        uncompleted: [],
      };
  }
  return state;
}
