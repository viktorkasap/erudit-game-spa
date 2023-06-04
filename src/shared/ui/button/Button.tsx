import { PropsWithChildren, ReactNode } from 'react';

import cn from 'classnames';

import { SizesNamesProps, SizesProps, VariantProps } from 'shared/types';

const variants = {
  // base: 'rounded-4 leading-4',
  filled: 'border-2 border-transparent',
  light: '',
  outline: '',
};

const colors = {
  default: 'bg-blue-500 hover:bg-blue-600 text-white',
  danger: '',
  success: '',
  warning: '',
  mute: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
};

const sizes = {
  xs: 'h-30 px-14 text-xs',
  sm: 'rounded-4 leading-4 h-36 px-18 text-sm',
  md: 'h-42 px-22 text-md',
  lg: 'h-50 px-26 text-lg',
  xl: 'h-60 px-32 text-xl',
};

const status = {
  disabled: 'bg-gray-200 hover:bg-gray-200 text-gray-500 cursor-not-allowed',
  loading: '',
};

export const Button = ({
  children,
  onClick,
  variant = 'filled',
  color = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn({
        [variants.filled]: variant === 'filled',
        [variants.light]: variant === 'light',
        [variants.outline]: variant === 'outline',
        [sizes.xs]: size === 'xs',
        [sizes.sm]: size === 'sm',
        [sizes.md]: size === 'md',
        [sizes.lg]: size === 'lg',
        [sizes.xl]: size === 'xl',
        [colors.default]: color === 'default',
        [colors.danger]: color === 'danger',
        [colors.success]: color === 'success',
        [colors.warning]: color === 'warning',
        [colors.mute]: color === 'mute',
        [status.loading]: loading,
        [status.disabled]: disabled,
      })}>
      <div className="flex justify-center items-center h-full">{children}</div>
    </button>
  );
};

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  variant?: VariantProps;
  size?: SizesNamesProps;
  radius?: SizesProps;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  color?: 'default' | 'danger' | 'success' | 'warning' | 'mute';
}

// tail
// draw
