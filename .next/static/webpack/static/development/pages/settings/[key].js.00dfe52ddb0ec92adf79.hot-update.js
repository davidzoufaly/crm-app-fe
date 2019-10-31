webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./actions/fieldsAction.tsx":
/*!**********************************!*\
  !*** ./actions/fieldsAction.tsx ***!
  \**********************************/
/*! exports provided: handleAddingToWF, addVisibleSelect, addHiddenSelect, removeFromList, showOptionsOnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAddingToWF", function() { return handleAddingToWF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisibleSelect", function() { return addVisibleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHiddenSelect", function() { return addHiddenSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromList", function() { return removeFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsOnClick", function() { return showOptionsOnClick; });
var handleAddingToWF = function handleAddingToWF(dispatch, state, counter, setCounter, e) {
  console.log("hi");
  state.map(function (field) {
    if (field.fieldName === e.target.value) {
      if (field.fieldType !== "select") {
        console.log("not select");
        dispatch({
          type: "addToWF",
          payload: {
            fieldName: e.target.value,
            counter: counter
          }
        });
        setCounter(function (prevCount) {
          return prevCount + 1;
        });
      } else {
        console.log("not select");
        dispatch({
          type: "pauseSelect",
          payload: {
            fieldName: e.target.value
          }
        });
      }
    }
  });
};
var addVisibleSelect = function addVisibleSelect(dispatch, setCounter, counter, e) {
  dispatch({
    type: "addVisibleSelectWF",
    payload: {
      fieldName: e.currentTarget.id,
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var addHiddenSelect = function addHiddenSelect(dispatch, setCounter, counter, e) {
  dispatch({
    type: "addHiddenSelectWF",
    payload: {
      optionValue: e.target.value,
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var removeFromList = function removeFromList(dispatch, e) {
  dispatch({
    type: "removeFromWF",
    payload: {
      fieldName: e.target.id
    }
  });
};
var showOptionsOnClick = function showOptionsOnClick(dispatch) {
  dispatch({
    type: "addNotVisibleValue"
  });
};

/***/ })

})
//# sourceMappingURL=[key].js.00dfe52ddb0ec92adf79.hot-update.js.map