import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * Primary CTA button. River Green background, Cream text, Inter letter-spaced.
 * Per v2 spec §4.5: no rounded corners except small UI (~8px), pill rare.
 * Hover: Warm Black bg. Transition: background-color 200ms.
 *
 * Renders as <Link> when `href` is provided, <button> otherwise.
 */

type Variant = 'primary' | 'ghost' | 'minimal';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-river text-cream border border-river hover:bg-ink hover:border-ink transition-colors duration-200',
  ghost:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream transition-colors duration-200',
  minimal:
    'bg-transparent text-copper hover:text-copper-deep transition-colors duration-200 border-b border-copper/40 hover:border-copper rounded-none',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '' } = props;

  const base =
    'inline-flex items-center justify-center font-sans font-medium uppercase tracking-button whitespace-nowrap';
  const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, children: _c, className: _cn, href, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cn, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
