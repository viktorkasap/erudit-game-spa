import { PropsWithChildren } from 'react';

export type SizesNamesProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizesProps = number | string | SizesNamesProps;

export type VariantProps = 'subtle' | 'light' | 'filled' | 'outline' | 'default';

export interface BaseComponentProps extends PropsWithChildren {
  onClick?: () => void;
  variant?: VariantProps;
  size?: SizesNamesProps;
}
