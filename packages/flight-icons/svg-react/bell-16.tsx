import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBell16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M13 8.78c0 1.334.788 1.72 1.25 1.72a.75.75 0 010 1.5H1.75a.75.75 0 010-1.5c.462 0 1.25-.386 1.25-1.72V6.405C3 3.665 4.907 1 8 1s5 2.665 5 5.405V8.78zM4.5 6.405C4.5 4.275 5.938 2.5 8 2.5c2.062 0 3.5 1.776 3.5 3.905V8.78c0 .677.145 1.252.387 1.72H4.113c.242-.468.387-1.043.387-1.72V6.405z"
                        clipRule="evenodd"
                    />
                    <path d="M6.898 12.872a.75.75 0 00-1.296.756A2.773 2.773 0 008 15c1.023 0 1.918-.55 2.398-1.372a.75.75 0 00-1.296-.756c-.219.374-.63.628-1.102.628-.473 0-.883-.254-1.102-.628z" />
                </g>
            </svg>
        );
    }
);
