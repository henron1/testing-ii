import React from 'react';
import {render, fireEvent } from 'react-testing-library';

import Dashboard from './components/Dashboard/Dashboard';

describe("<Dashboard />", () => {
    it("should render strike, ball, foul, and hit buttons to the screen", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/strikes/i)).toBeInTheDocument();
      expect(getByText(/balls/i)).toBeInTheDocument();
      expect(getByText(/fouls/i)).toBeInTheDocument();
      expect(getByText(/hits/i)).toBeInTheDocument();
    });
  });