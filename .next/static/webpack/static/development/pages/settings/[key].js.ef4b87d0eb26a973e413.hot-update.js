webpackHotUpdate("static/development/pages/settings/[key].js",{

/***/ "./actions/fieldsAction.tsx":
/*!**********************************!*\
  !*** ./actions/fieldsAction.tsx ***!
  \**********************************/
/*! exports provided: addField, deleteField, handleAddingToWF, addVisibleSelect, addHiddenSelect, removeFromList, showOptionsOnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addField", function() { return addField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteField", function() { return deleteField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAddingToWF", function() { return handleAddingToWF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisibleSelect", function() { return addVisibleSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHiddenSelect", function() { return addHiddenSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromList", function() { return removeFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsOnClick", function() { return showOptionsOnClick; });
var addField = function addField(dispatch, obj) {
  dispatch({
    type: "addNewField",
    payload: {
      obj: obj
    }
  });
};
var deleteField = function deleteField(dispatch, id) {
  dispatch({
    type: "deleteField",
    payload: {
      id: id
    }
  });
};
var handleAddingToWF = function handleAddingToWF(dispatch, state, counter, setCounter, e) {
  state.map(function (field) {
    if (field.fieldName === e.target.getAttribute("data-value")) {
      if (field.fieldType !== "select") {
        dispatch({
          type: "addToWF",
          payload: {
            fieldName: e.target.getAttribute("data-value"),
            counter: counter
          }
        });
        setCounter(function (prevCount) {
          return prevCount + 1;
        });
      } else {
        dispatch({
          type: "pauseSelect",
          payload: {
            fieldName: e.target.getAttribute("data-value")
          }
        });
      }
    }
  });
};
var addVisibleSelect = function addVisibleSelect(dispatch, setCounter, counter) {
  dispatch({
    type: "addVisibleSelectWF",
    payload: {
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var addHiddenSelect = function addHiddenSelect(dispatch, setCounter, counter, event) {
  dispatch({
    type: "addHiddenSelectWF",
    payload: {
      optionValue: event.currentTarget.value,
      counter: counter
    }
  });
  setCounter(function (prevCount) {
    return prevCount + 1;
  });
};
var removeFromList = function removeFromList(dispatch, event) {
  dispatch({
    type: "removeFromWF",
    payload: {
      fieldName: event.currentTarget.id
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
//# sourceMappingURL=[key].js.ef4b87d0eb26a973e413.hot-update.js.map