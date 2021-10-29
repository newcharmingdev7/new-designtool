import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSkipForward24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M6.764 4.512C5.606 3.688 4 4.516 4 5.938v12.124c0 1.421 1.606 2.25 2.764 1.426l8.525-6.062a1.75 1.75 0 000-2.852L6.764 4.512zM5.5 5.938a.25.25 0 01.395-.204l8.524 6.062c.14.1.14.308 0 .408l-8.524 6.061a.25.25 0 01-.395-.203V5.938z"
                        clipRule="evenodd"
                    />
                    <path d="M19.5 5A.75.75 0 0018 5v14a.75.75 0 001.5 0V5z" />
                </g>
            </svg>
        );
    }
);
