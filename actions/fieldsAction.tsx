export const addField = (dispatch, obj) => {
  dispatch({
    type: "addNewField",
    payload: { obj }
  });
};

export const deleteField = (dispatch, id) => {
  dispatch({
    type: "deleteField",
    payload: { id }
  });
};

export const handleAddingToWF = (dispatch, state, counter, setCounter, e) => {
  state.map(field => {
    if (field.fieldName === e.target.getAttribute("data-value")) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: { fieldName: e.target.getAttribute("data-value"), counter }
        });
        setCounter(prevCount => prevCount + 1);
      } else {
        dispatch({
          type: "pauseSelect",
          payload: { fieldName: e.target.getAttribute("data-value") }
        });
      }
    }
  });
};
export const addVisibleSelect = (dispatch, setCounter, counter) => {
  dispatch({
    type: "addVisibleSelectWF",
    payload: { counter }
  });
  setCounter(prevCount => prevCount + 1);
};

export const addHiddenSelect = (dispatch, setCounter, counter, e) => {
  dispatch({
    type: "addHiddenSelectWF",
    payload: { optionValue: e.target.getAttribute("data-value"), counter }
  });
  setCounter(prevCount => prevCount + 1);
};

export const removeFromList = (dispatch, e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  dispatch({
    type: "removeFromWF",
    payload: { fieldName: e.target.id }
  });
};

export const showOptionsOnClick = dispatch => {
  dispatch({
    type: "addNotVisibleValue"
  });
};
