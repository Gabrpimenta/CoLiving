/**
 * CoLiving Theme Design System
 *
 * Modern, cohesive design system for the CoLiving coliving community platform.
 * Built on GluestackUI with custom brand colors and design tokens.
 */

export const ColivingTheme = {
  // Brand Colors - Primary: Deep Blue representing community and trust
  brand: {
    primary: '#0066CC',
    primaryLight: '#3399FF',
    primaryDark: '#004499',
    secondary: '#00A86B',
    accent: '#FF6B35',
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Spacing Scale (8px base)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  // Typography Scale
  typography: {
    fontFamily: {
      heading: 'System',
      body: 'System',
      mono: 'monospace',
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // Border Radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },

  // Shadows
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },

  // Component-specific tokens
  components: {
    card: {
      padding: 16,
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
    },
    button: {
      borderRadius: 8,
      minHeight: 44, // WCAG 2.1 AA compliant
    },
    input: {
      borderRadius: 8,
      minHeight: 44,
      padding: 12,
    },
  },
} as const;

/**
 * Design Tokens for NativeWind/Tailwind classes
 */
export const DesignTokens = {
  // Custom color classes that can be used with NativeWind
  colors: {
    'brand-primary': ColivingTheme.brand.primary,
    'brand-secondary': ColivingTheme.brand.secondary,
    'brand-accent': ColivingTheme.brand.accent,
  },
} as const;

export default ColivingTheme;
