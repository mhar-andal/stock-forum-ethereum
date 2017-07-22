export default (state = { foos: [] }, action) => {
  if (action.type === 'ADD_FOO') {
    return {
      ...state,
      todos: [...state.foos, action.foo],
    };
  }

  return state;
};
