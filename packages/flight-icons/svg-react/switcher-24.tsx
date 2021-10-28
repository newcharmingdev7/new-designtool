import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSwitcher24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    <path d="M2.25 1C1.56 1 1 1.56 1 2.25v3.5C1 6.44 1.56 7 2.25 7h3.5C6.44 7 7 6.44 7 5.75v-3.5C7 1.56 6.44 1 5.75 1h-3.5zM10.25 1C9.56 1 9 1.56 9 2.25v3.5C9 6.44 9.56 7 10.25 7h3.5C14.44 7 15 6.44 15 5.75v-3.5C15 1.56 14.44 1 13.75 1h-3.5zM18.25 1C17.56 1 17 1.56 17 2.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C22.44 7 23 6.44 23 5.75v-3.5C23 1.56 22.44 1 21.75 1h-3.5zM2.25 9C1.56 9 1 9.56 1 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C6.44 15 7 14.44 7 13.75v-3.5C7 9.56 6.44 9 5.75 9h-3.5zM10.25 9C9.56 9 9 9.56 9 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C15 9.56 14.44 9 13.75 9h-3.5zM18.25 9c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C23 9.56 22.44 9 21.75 9h-3.5zM2.25 17C1.56 17 1 17.56 1 18.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C6.44 23 7 22.44 7 21.75v-3.5C7 17.56 6.44 17 5.75 17h-3.5zM10.25 17C9.56 17 9 17.56 9 18.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5zM18.25 17c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5z" />
                </g>
            </svg>
        );
    }
);
