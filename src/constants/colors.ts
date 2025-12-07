/**
 * Color palette for CoLiving
 *
 * WCAG 2.1 AA compliant color contrast ratios
 */

export const Colors = {
  primary: '#007AFF',
  primaryDark: '#0051D5',
  secondary: '#5856D6',

  // Semantic colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',

  // Neutral colors
  background: '#FFFFFF',
  surface: '#F2F2F7',
  border: '#C6C6C8',

  // Text colors
  text: '#000000',
  textSecondary: '#3C3C43',
  textTertiary: '#3C3C4399',
  textInverse: '#FFFFFF',

  // Status colors
  pending: '#FF9500',
  confirmed: '#34C759',
  errorState: '#FF3B30',

  // Dark mode support
  dark: {
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
  },
} as const;
