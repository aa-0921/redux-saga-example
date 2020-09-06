const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log('reducerのaction.type',action.type)

  switch (action.type) {
    case "AGE_UP_ASYNC":
      console.log('AGE_UP_ASYNC')
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      console.log('AGE_DOWN')
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer;
