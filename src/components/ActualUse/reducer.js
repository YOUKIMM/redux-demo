// The initial state of the App
export const initialState = {
  count: 0
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return {
        count: state.count + action.payload.count
      };
    default:
      break;
  }
  return state;
};
