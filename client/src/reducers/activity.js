
const initalState = {
  activityForm: false,
  todoForm: false,
}

export const activity = (state = initalState, { type, payload }) => {
  switch (type) {

    case "OPEN_ACTIVITY_FORM":
      console.log(initalState);
      return { ...state, activityForm: true }

    case "CLOSE_ACTIVITY_FORM":
      console.log(initalState);
      return { ...state, activityForm: false }

    case "OPEN_TODO_FORM":
      console.log(initalState);
      return { ...state, todoForm: true }

    case "CLOSE_TODO_FORM":
      console.log(initalState);
      return { ...state, todoForm: false }

    default:
      return state;
  }
}