import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer.js';

describe('Footer', () => {
  test('renders the copyright with the current year', () => {
    const currentYear = new Date().getFullYear();
    const textToFind = `\u00A9${currentYear} All rights reserved.`;
    render(<Footer />);
    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
