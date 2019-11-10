/* eslint-disable */
exports.pauseSelect = (state, payload) => {
  return state.map(field =>
    field.fieldName === payload.fieldName ? { ...field, pause: true } : field
  );
};

exports.addNotVisibleValue = state => {
  return state.map(field =>
    field.pause
      ? {
          ...field,
          fieldFormVisible: false
        }
      : field
  );
};
