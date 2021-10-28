import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGitMerge16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    fill={color}
                    fillRule="evenodd"
                    d="M4.644 6.865A3.001 3.001 0 003.75 1 3 3 0 003 6.905V14a.75.75 0 001.5 0V9.518c.21.266.436.527.675.78C6.21 11.39 7.619 12.432 9.08 12.69a3.001 3.001 0 10.038-1.526c-.92-.237-1.951-.946-2.855-1.899A9.018 9.018 0 014.955 7.52a4.969 4.969 0 01-.311-.655zM3.75 2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10.5 12a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
