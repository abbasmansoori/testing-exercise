import React from "react";

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import { shallow, render as renderEnzyme, mount } from "enzyme";

import App from "./App";

describe("App component", () => {
//   //!App component test
//   it("renders App without error (smoke test)", () => {
//     render(<App />);
//   });
// //!Greeting component test
//   it("renders Greeting  without error (smoke test)", () => {
//     render(<Greeting />);
//   });
//   //!Counter component test
//   it("renders Counter without error (smoke test)", () => {
//     render(<Counter />);
//   });
//  //!App component shallow test Enzyme
//   it("renders App without error (smoke test) (Enzyme shallow)", () => {
//     const wrapper = shallow(<App />);
//   });

//   it("renders Counter without error (smoke test) (Enzyme shallow)", () => {
//     const wrapper = shallow(<Counter />);
//   });
//   //!App component mount test Enzyme
//   it("renders App without error (smoke test) (Enzyme mount)", () => {
//     const wrapper = mount(<App />);
//   });

//   it("renders inside an <h1> element (smoke test) (Enzyme mount)", () => {
//     const wrapper = shallow(<Greeting />);
//     expect(wrapper.containsMatchingElement(<h1>Hello</h1>)).toBe(true);
//   });

  it("contains the text Value: 1 (smoke test) (Enzyme mount)", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.containsMatchingElement(<button>Value: 1</button>)).toBe(true);
  });

  it("tests click event counter (smoke test) (Enzyme mount)", () => {
    const wrapper = shallow(<Counter />);
    
    //test with enzyme that the button is rendered and value is changed on click
    expect(wrapper.find("button").text()).toBe("Value: 1");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").text()).toBe("Value: 2");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("button").text()).toBe("Value: 3");
  });


  

  
});
