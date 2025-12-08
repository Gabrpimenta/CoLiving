import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '../index';

describe('Input', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test input" />);
    expect(getByPlaceholderText('Test input')).toBeTruthy();
  });

  it('should render with value', () => {
    const { getByDisplayValue } = render(<Input value="Test value" />);
    expect(getByDisplayValue('Test value')).toBeTruthy();
  });

  it('should be editable', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test input" editable />);
    const input = getByPlaceholderText('Test input');
    expect(input.props.editable).toBe(true);
  });

  it('should accept className prop', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" className="custom-class" />
    );
    const input = getByPlaceholderText('Test input');
    expect(input).toBeTruthy();
  });
});

