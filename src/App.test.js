import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import App from './App.js';

expect.extend(toHaveNoViolations);

describe('App', () => {
  test('passes jest-axe accessibility testing', async () => {
    render(<App />, document.body);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  test('renders main content', () => {
    render(<App />);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });
});
