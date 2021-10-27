import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconOctagon24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M6.64 1.805A2.75 2.75 0 018.585 1h6.83c.73 0 1.429.29 1.945.805l4.835 4.835A2.75 2.75 0 0123 8.585v6.83c0 .73-.29 1.429-.805 1.945l-4.835 4.835a2.75 2.75 0 01-1.945.805h-6.83a2.75 2.75 0 01-1.945-.805L1.805 17.36A2.75 2.75 0 011 15.415v-6.83c0-.73.29-1.429.805-1.945L6.64 1.805zm1.945.695c-.332 0-.65.132-.884.366L2.866 7.701a1.25 1.25 0 00-.366.884v6.83c0 .332.132.65.366.884l4.835 4.835c.234.234.552.366.884.366h6.83c.332 0 .65-.132.884-.366l4.835-4.835a1.25 1.25 0 00.366-.884v-6.83c0-.332-.132-.65-.366-.884l-4.835-4.835a1.25 1.25 0 00-.884-.366h-6.83z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
