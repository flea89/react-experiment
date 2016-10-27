import statementsData from '../data/statements';

function reducer(state = statementsData, action) {
  switch (action.type) {
    case 'STATEMENTS/ASSIGN_TO_CATEGORY': {
      const newState = {...state};
      console.log(action.category);
      console.log(newState === state);
      newState[action.id].category = action.category;
      return state;
    }
    default:
      return state;
  }
}

export default reducer;
