import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe("<Dashboard />", () => {
    it("should render buttons", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/add a strike!/i)).toBeInTheDocument();
      expect(getByText(/add a ball!/i)).toBeInTheDocument();
      expect(getByText(/add a foul!/i)).toBeInTheDocument();
      expect(getByText(/add a hit!/i)).toBeInTheDocument();
    });
  });