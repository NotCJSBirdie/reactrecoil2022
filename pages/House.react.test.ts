import renderer from "react-test-renderer";
import House from "./components/House";
import "@testing-library/jest-dom/extend-expect";

test("House changes when button is clicked", () => {
  const component: any = renderer.create(typeof House);

  let tree = component.toJSON();

  expect(tree).toHaveBeenCalled;
});

//To solve your issue, you need to add the custom jest matchers from jest-dom by importing "@testing-library/jest-dom/extend-expect" in your test file. It is also mentioned in React Testing Library's full example.

//Edit: I've just read the comments under your question and it seems @jonrsharpe has already mentioned that you need to import extend-expect but I'll leave this answer here.
