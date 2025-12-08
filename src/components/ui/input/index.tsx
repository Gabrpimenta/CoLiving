import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { cssInterop } from 'nativewind';

cssInterop(TextInput, {
  className: {
    target: 'style',
  },
});

type InputProps = TextInputProps & {
  className?: string;
};

const Input = React.forwardRef<TextInput, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <TextInput
      ref={ref}
      className={`rounded-md border border-outline-300 bg-background-0 px-3 py-3 text-typography-900 ${className || ''}`}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };

