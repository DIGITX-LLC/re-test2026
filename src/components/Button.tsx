import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            'relative inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
            {
              // Primary Variant: Modern Gradient + Glow + Inner Bevel
              'bg-gradient-to-b from-red-600 to-red-800 text-white shadow-[0px_1px_2px_rgba(0,0,0,0.3),inset_0px_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0px_0px_20px_rgba(220,38,38,0.6),inset_0px_1px_1px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] border border-red-700':
                variant === 'primary',
              
              // Secondary Variant: Dark Glassy
              'bg-zinc-800/80 backdrop-blur-sm text-white border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 shadow-sm':
                variant === 'secondary',
              
              // Outline Variant: Thin border with subtle glow on hover
              'bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0px_0px_15px_rgba(239,68,68,0.2)]':
                variant === 'outline',

              'h-9 px-4 text-sm': size === 'sm',
              'h-11 px-6 text-base': size === 'md',
              'h-14 px-8 text-lg': size === 'lg',
            },
            className
          )
        )}
        {...props}
      >
        {/* Shimmer Effect for Primary Button */}
        {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0 pointer-events-none" />
        )}
        
        {/* Content Wrapper to stay above shimmer */}
        <span className="relative z-10 flex items-center gap-2">
           {props.children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
