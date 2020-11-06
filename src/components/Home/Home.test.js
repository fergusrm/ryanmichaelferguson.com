import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home.js';

describe('Home', () => {
  test('renders my photo', () => {
    render(<Home />);
    expect(screen.getByTestId('my-photo')).toBeInTheDocument();
  });
  test('renders intro text', () => {
    render(<Home />);
    expect(screen.getByText(/Ryan Ferguson/)).toBeInTheDocument();
  });
  test('renders Resume link', () => {
    render(<Home />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });
  test('renders LinkedIn link', () => {
    render(<Home />);
    expect(screen.getByText('LinkedIn')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ryan-ferguson-55518977/'
    );
  });
  test('renders Send Email link', () => {
    render(<Home />);
    expect(screen.getByText('Send Email')).toHaveAttribute('href', 'mailto:ryanmferguson@pm.me');
  });
  test('renders GitHub link', () => {
    render(<Home />);
    expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/fergusrm');
  });
});
