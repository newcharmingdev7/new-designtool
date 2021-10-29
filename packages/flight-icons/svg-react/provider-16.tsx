import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconProvider16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zm-.5 1.519a6.464 6.464 0 00-2 .48V5.19l2-1.09V1.518zM1.532 7.356A6.491 6.491 0 014 2.876V6.01L1.532 7.356zm.05 1.68L4 7.719v5.406a6.495 6.495 0 01-2.418-4.087zM7.5 11.423l-2 1.143V6.9l2-1.091v5.613zm1.5-.857V4.991L11 3.9v5.522l-2 1.143zm2 .585l-2 1.143v2.13a6.456 6.456 0 002-.655V11.15zm1.5 1.54v-2.397l1.887-1.079A6.488 6.488 0 0112.5 12.69zm0-4.125V3.31a6.482 6.482 0 011.976 4.126L12.5 8.565zm-5 4.585l-1.697.97a6.47 6.47 0 001.697.361V13.15zM9 3.282V1.576a6.455 6.455 0 011.961.636L9 3.282z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
