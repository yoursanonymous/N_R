import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";
import ItemList from "../ItemList";
describe("should load contact us page contact", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    //quering
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  //to find the button
  test("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  });
  it("should load 2 input box", () => {//can also use it in the describe
    render(<Contact />);
    const inp = screen.getAllByRole("textbox");
    console.log(inp.length); // this returns a react element/react fibernode
    expect(inp.length).not.toBe(3);
  });
});
