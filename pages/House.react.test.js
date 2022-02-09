import React from "react";
import renderer from "react-test-renderer";
import House from "./components/House";

test("House changes when button is clicked", () => {
  const component = renderer.create(<House />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
