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

export const handleAddingToWF = (dispatch, state, counter, setCounter, event) => {
  state.map(field => {
    if (field.fieldName === event.target.value) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: { fieldName: event.target.value, counter }
        });
        setCounter(prevCount => prevCount + 1);
      } else {
        dispatch({
          type: "pauseSelect",
          payload: { fieldName: event.target.value }
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

export const addHiddenSelect = (dispatch, setCounter, counter, event) => {
  dispatch({
    type: "addHiddenSelectWF",
    payload: { optionValue: event.target.value, counter }
  });
  setCounter(prevCount => prevCount + 1);
};

export const removeFromList = (dispatch, event) => {
  dispatch({
    type: "removeFromWF",
    payload: { fieldName: event.currentTarget.id }
  });
};

export const showOptionsOnClick = dispatch => {
  dispatch({
    type: "addNotVisibleValue"
  });
};
