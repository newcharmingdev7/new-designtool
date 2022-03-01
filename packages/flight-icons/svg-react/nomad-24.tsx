import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconNomad24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M12 .5L2 6.25v11.5l10 5.75 10-5.75V6.25L12 .5zm4.456 12.646l-2.664 1.533-3.22-1.745v3.664l-3.026 1.911v-7.661l2.401-1.463 3.331 1.748v-3.74l3.185-1.902-.008 7.655z"
                />
            </svg>
        );
    }
);
