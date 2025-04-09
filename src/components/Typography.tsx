import { default as React, CSSProperties, forwardRef } from 'react';
import clsx from 'clsx';

export type TypographyProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'highlight' | 'danger' | 'accent';
  type: 'display' | 'massiveTitle' | 'title' | 'subtitle' | 'body' | 'caption' | 'button' | 'overline' | 'link';
  className?: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'highlight' | 'danger' | 'accent';
  weight?: string;
  styles?: CSSProperties;
  visibleOn?: 'mobile-only' | 'desktop-only' | 'all';
  id?: string;
  italic?: boolean;
};

const variantClasses: Record<NonNullable<TypographyProps['variant']>, string> = {
  primary: 'text-black',
  secondary: 'text-white',
  tertiary: 'text-midBlue',
  muted: 'text-gray-400 italic',
  highlight: 'bg-yellow-100 text-yellow-800 px-1',
  danger: 'text-red-600 font-semibold',
  accent: 'text-amber',
};

const typeClasses: Record<TypographyProps['type'], string> = {
  display: 'lg:text-6xl xs:text-4xl font-bold tracking-tighter leading-none',
  massiveTitle: 'lg:text-9xl xs:text-5xl font-bold tracking-tight leading-none',
  title: 'lg:text-3xl xs:text-xl font-semibold leading-snug',
  subtitle: 'lg:text-xl xs:text-base font-medium leading-relaxed',
  body: 'lg:text-base xs:text-sm font-normal leading-relaxed',
  caption: 'lg:text-sm xs:text-xs leading-snug',
  button: 'lg:text-sm xs:text-xs uppercase tracking-wide font-semibold leading-none',
  overline: 'lg:text-xs xs:text-[0.625rem] uppercase tracking-widest font-medium',
  link: 'lg:text-base xs:text-sm underline font-medium hover:text-blue-800 transition-colors duration-200',
};

const colorClasses: Record<NonNullable<TypographyProps['color']>, string> = {
  primary: 'text-black',
  secondary: 'text-white',
  tertiary: 'text-midBlue',
  muted: 'text-gray-400 italic',
  highlight: 'bg-yellow-100 text-yellow-800 px-1',
  danger: 'text-red-600 font-semibold',
  accent: 'text-amber',
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
      type,
      className = '',
      children,
      color,
      weight,
      styles,
      id,
      visibleOn = 'all',
      italic,
    },
    ref
  ) => {
    return (
      <p
        id={id}
        ref={ref}
        className={clsx(
          variant && variantClasses[variant],
          typeClasses[type],
          color && colorClasses[color],
          visibleOnClasses[visibleOn],
          className,
          italic ? 'italic' : ''
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
