import React from "react";

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

import { shallow, render as renderEnzyme, mount } from "enzyme";

import App from "./App";

describe("App component", () => {
  it("renders without error (smoke test)", () => {
    render(<App />);
  });

  it("renders without error (smoke test)", () => {
    render(<Greeting />);
  });

  it("renders without error (smoke test) (Enzyme shallow)", () => {
    const wrapper = shallow(<App />);
  });
  it("renders without error (smoke test) (Enzyme mount)", () => {
    const wrapper = mount(<App />);
  });

  it("renders inside an <h1> element (smoke test) (Enzyme mount)", () => {
    const wrapper = shallow(<Greeting />);
    expect(wrapper.containsMatchingElement(<h1>Hello</h1>)).toBe(true);
  });

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders hello component", () => {
    render(<Greeting />);
    const Component = screen.getByText(/Hello/i);
    expect(Component).toBeInTheDocument();
  });

  
});
