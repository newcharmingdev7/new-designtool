import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconConsul24 = forwardRef<SVGSVGElement, IconProps>(
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
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M6.872 21.731A11 11 0 0012.009 23a10.97 10.97 0 007.442-2.902l-2.61-2.73a7.229 7.229 0 110-10.73l2.61-2.73A11 11 0 106.87 21.73zM20.36 17.346a.901.901 0 101.001-1.498.901.901 0 00-1.001 1.498z" />
                    <path d="M11.939 14.383a2.383 2.383 0 11-.02-4.766 2.383 2.383 0 01.02 4.766zM21.394 14.274a.902.902 0 101.002-1.5.902.902 0 00-1.002 1.5zM19.214 14.313a.902.902 0 110-1.804.902.902 0 010 1.804zM21.394 11.236a.901.901 0 101.001-1.5.901.901 0 00-1.001 1.5zM19.214 11.49a.901.901 0 110-1.803.901.901 0 010 1.803zM20.411 8.204a.901.901 0 10.999-1.5.901.901 0 00-.999 1.5z" />
                </g>
            </svg>
        );
    }
);
