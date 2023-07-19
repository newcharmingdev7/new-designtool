import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconElasticObservabilityColor16 = forwardRef<
    SVGSVGElement,
    IconProps
>(({ color = 'currentColor', title, ...props }, svgRef) => {
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
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    fill="#F04E98"
                    d="M5.375 15H4.167c-1.507 0-2.73-1.372-2.73-3.064V7.563h3.938V15z"
                />
                <path fill="#343741" d="M5.375 15h3.938V4.5H5.374V15z" />
                <path
                    fill="#07C"
                    d="M14.563 15h-3.938V1l.863.01c1.703.021 3.075 1.622 3.075 3.59V15z"
                />
            </g>
        </svg>
    );
});
