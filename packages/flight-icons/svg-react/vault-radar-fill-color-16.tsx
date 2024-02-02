import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultRadarFillColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#FFCF25"
                    fillRule="evenodd"
                    d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.955 7.578l.42.42-.001.002a4.38 4.38 0 01-4.375 4.375A4.38 4.38 0 013.625 8a4.38 4.38 0 014.374-4.375c1.304 0 2.548.591 3.376 1.593L8.593 8H8v-.594l.873-.873A1.71 1.71 0 006.292 8a1.71 1.71 0 001.707 1.708A1.71 1.71 0 009.707 8l.42-.42.42.42A2.55 2.55 0 018 10.548 2.55 2.55 0 015.451 8 2.55 2.55 0 018 5.452c.54 0 1.05.168 1.48.475l.704-.705A3.545 3.545 0 008 4.464 3.539 3.539 0 004.467 8 3.539 3.539 0 008 11.533 3.539 3.539 0 0011.535 8l.42-.42z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
