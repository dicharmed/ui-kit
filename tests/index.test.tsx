import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from '../src/components/Button/Button';

test('The button should have correct background color', async () => {
  render(<Button backgroundColor="#ccc" label="Demo Button" />);
  const button = screen.getByText('Demo Button');
  expect(button).toHaveStyle({
    backgroundColor: '#ccc',
  });
});
