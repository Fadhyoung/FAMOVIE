import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  buttonType?:
    | 'solid'
    | 'outline'
    | 'subtle'
    | 'ghost'
    | 'link'
    | 'icon'
    | 'elevated';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'default';
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isLoading?: boolean;
  loadingPosition?: 'left' | 'right';
  labelLoading?: string;
  visibleOn?: 'mobile-only' | 'desktop-only' | 'all';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      children,
      startIcon,
      endIcon,
      icon,
      buttonType = 'solid',
      size = 'sm',
      variant = 'primary',
      radius = 'xs',
      isLoading = false,
      loadingPosition = 'right',
      labelLoading = 'Loading...',
      className,
      disabled,
      visibleOn = 'all',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium focus:outline-none transition-all';

    const variantStyles = {
      primary: 'bg-white',
      secondary: 'bg-primaryGreen text-white',
      tertiary: 'bg-secondaryGreen',
      quartiary: 'bg-tertiaryGreen',
      danger: 'bg-red-600',
      default: 'bg-gray-200',
    };

    const buttonTypeStyles = {
      solid: `${variantStyles[variant]} text-black`,
      outline: 'border border-current bg-transparent',
      subtle: `${variantStyles[variant]} bg-opacity-50`,
      ghost: 'bg-transparent',
      link: 'bg-transparent underline p-0',
      icon: 'p-2 rounded-full',
      elevated: `${variantStyles[variant]} lg:shadow-md hover:shadow-lg`,
    };

    const sizeStyles = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 lg:text-sm xs:text-lg',
      md: 'px-4 py-2 lg:text-base xs:text-sm',
      lg: 'lg:px-5 lg:py-3 xs:px-1 xs:py-1 lg:text-lg xs:text-base',
      xl: 'px-8 py-5 lg:text-xl xs:text-lg',
    };

    const radiusStyles = {
      none: 'rounded-none',
      xs: 'rounded-sm',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    };

    const visibleOnClasses = {
      'mobile-only': 'md:hidden flex',
      'desktop-only': 'hidden md:flex',
      all: 'block',
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          buttonTypeStyles[buttonType],
          sizeStyles[size],
          radiusStyles[radius],
          visibleOnClasses[visibleOn],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && loadingPosition === 'left' && (
          <span className="mr-2 animate-spin">🔄</span>
        )}
        {startIcon && !icon && <span className="mr-2">{startIcon}</span>}
        {icon ? icon : isLoading ? labelLoading : children ?? label}
        {endIcon && !icon && <span className="ml-2">{endIcon}</span>}
        {isLoading && loadingPosition === 'right' && (
          <span className="ml-2 animate-spin">🔄</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
