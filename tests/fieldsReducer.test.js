/* eslint-disable */
fieldsReducer = require('./fieldsReducer');
const addNotVisibleValue = fieldsReducer.addNotVisibleValue;
const pauseSelect = fieldsReducer.pauseSelect;

it("pauseSelect", () => {
  expect(
    pauseSelect([{ fieldName: "Test field"}, {fieldName: "Test field 2"}], {fieldName: "Test field"})
  ).toStrictEqual([
    { fieldName: "Test field", pause: true },
    { fieldName: "Test field 2" }
  ]);
});

it("addNotVisibleValue", () => {
  expect(
    addNotVisibleValue([
      { fieldName: "Test field", pause: true }, { fieldName: "Test field 2", pause: false }
    ])
  ).toStrictEqual([{ fieldName: "Test field", pause: true, fieldFormVisible: false }, { fieldName: "Test field 2", pause: false }])
})