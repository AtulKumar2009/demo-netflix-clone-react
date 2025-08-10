import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('', () => {
  test('Should render Count button on App', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
  test('On + Click increase count', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: /➕/i });
    expect(btn).toBeInTheDocument();
  });
});
