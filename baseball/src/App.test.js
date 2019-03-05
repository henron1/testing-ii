// import React from 'react';
// import {render, fireEvent } from 'react-testing-library';
// import App from './App';
// import Dashboard from './components/Dashboard/Dashboard';

// describe('<Dashboard />', () => {
//   it('strikes button exists', () => {
//     const {getByText} = render (<App />);
//     const strikesButton = getByText(/strike/i);
//     expect(strikesButton).toBeInTheDocument();
//   })
// })
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const helpers = render(<App />);
  });
});