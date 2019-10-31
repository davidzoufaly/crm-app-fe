const fieldsReducer = (state, action) => {
  switch (action.type) {
    case "addNewField":
      return state.some(field => field._id === action.payload.obj._id)
        ? state.map(field =>
            field._id === action.payload.obj._id ? action.payload.obj : field
          )
        : [...state, action.payload.obj];
    case "deleteField":
      return state.filter(field => field._id !== action.payload.id);
    case "addToWF":
      return state.map(field =>
        field.fieldName === action.payload.fieldName
          ? { ...field, fieldInForm: true, order: action.payload.counter }
          : field
      );
    case "addVisibleSelectWF":
      return state.map(field =>
        field.pause
          ? {
              ...field,
              fieldInForm: true,
              fieldFormVisible: true,
              pause: false,
              order: action.payload.counter
            }
          : field
      );
    case "addNotVisibleValue":
      return state.map(field =>
        field.pause
          ? {
              ...field,
              fieldFormVisible: false
            }
          : field
      );
    case "addHiddenSelectWF":
      return state.map(field =>
        field.pause
          ? {
              ...field,
              fieldInForm: true,
              pause: false,
              order: action.payload.counter,
              fieldOptions: field.fieldOptions.map(option =>
                option.value === action.payload.optionValue
                  ? { ...option, preselected: true }
                  : option
              )
            }
          : field
      );
    case "pauseSelect":
      return state.map(field =>
        field.fieldName === action.payload.fieldName
          ? { ...field, pause: true }
          : field
      );

    case "removeFromWF":
      return state.map(field =>
        field.fieldName === action.payload.fieldName
          ? {
              ...field,
              fieldInForm: false,
              fieldFormVisible: null,
              fieldOptions: field.fieldOptions.map(option =>
                option.preselected ? { ...option, preselected: null } : option
              )
            }
          : field
      );
    default:
      throw new Error();
  }
};

export default fieldsReducer;
