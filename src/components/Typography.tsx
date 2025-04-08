import { default as React, CSSProperties, forwardRef } from 'react';
import clsx from 'clsx';

export type TypographyProps = {
  variant: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  type?: 'display' | 'title' | 'subtitle' | 'body' | 'button' | 'overline';
  className?: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'link';
  weight?: string;
  styles?: CSSProperties;
  visibleOn?: 'mobile-only' | 'desktop-only' | 'all';
  id?: string;
};

const variantClasses: Record<TypographyProps['variant'], string> = {
  '2xs': 'lg:text-[0.625rem] xs:text-[0.375rem]',
  xs: 'lg:text-[0.75rem] xs:text-[0.5rem]',
  sm: 'lg:text-[0.875rem] xs:text-[0.625rem]',
  md: 'lg:text-[1rem] xs:text-[0.75rem]',
  lg: 'lg:text-[1.25rem] xs:text-[1rem]',
  xl: 'lg:text-[1.5rem] xs:text-[1.25rem]',
  '2xl': 'lg:text-[1.875rem] xs:text-[1.5rem]',
  '3xl': 'lg:text-[2.125rem] xs:text-[1.5rem]',
  '4xl': 'lg:text-[6rem] xs:text-[2.25rem]',
};

const colorClasses: Record<NonNullable<TypographyProps['color']>, string> = {
  primary: 'text-[#FFFFFF]',
  secondary: 'text-[#000000]',
  tertiary: 'text-[#a3a3a3]',
  link: 'text-[#3366CC]',
};

const visibleOnClasses: Record<
  NonNullable<TypographyProps['visibleOn']>,
  string
> = {
  'mobile-only': 'md:hidden flex',
  'desktop-only': 'hidden md:flex',
  all: 'flex',
};

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      variant,
      className = '',
      children,
      color = 'primary',
      weight,
      styles,
      id,
      visibleOn = 'all',
    },
    ref
  ) => {
    return (
      <p
        id={id}
        ref={ref}
        className={clsx(
          variantClasses[variant],
          colorClasses[color],
          visibleOnClasses[visibleOn],
          className
        )}
        style={{ color, fontWeight: weight, ...styles }}
      >
        {children}
      </p>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
