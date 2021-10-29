
const initalState = {
  activityForm: false
}

export const activity = (state = initalState, { type, payload }) => {
  switch (type) {

    case "OPEN_ACTIVITY_FORM":
      console.log(initalState);
      return { ...state, activityForm: true }

    case "CLOSE_ACTIVITY_FORM":
      console.log(initalState);
      return { ...state, activityForm: false }

    default:
      return state;
  }
}