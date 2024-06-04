import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVagrant16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill={color}
                    fillRule="evenodd"
                    d="M1 1.559h4.667v3.4l4.666 9.482H5.667L1 4.96V1.559zm9.333 3.4v-3.4H15v3.4l-4.269 8.672-2.335-4.74 1.937-3.931z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
