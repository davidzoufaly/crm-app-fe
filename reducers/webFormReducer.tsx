const webFormReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
            ? { ...field, fieldInForm: true, order: action.payload.counter }
            : field
        );
      case "addVisibleSelect":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
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
      case "addHiddenSelect":
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
  
      case "remove":
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

  export default webFormReducer;