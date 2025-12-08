export const isWeb = false;
export const tva = jest.fn((config) => jest.fn((props) => config.base || ''));
export const withStyleContext = jest.fn((Component) => Component);
export const useStyleContext = jest.fn(() => ({}));

export type VariantProps<T> = Record<string, any>;

