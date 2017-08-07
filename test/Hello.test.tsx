import * as React from "react";
import {mount} from "enzyme";
import { expect } from 'chai';
import Hello from "../src/Hello";

describe("Hello", () => {
  it('renders three <Hello /> components', () => {
    const wrapper = mount(<Hello name="Mike" />);
    expect(wrapper.find("h1").text()).to.contain('Hello Mike');
  });
});