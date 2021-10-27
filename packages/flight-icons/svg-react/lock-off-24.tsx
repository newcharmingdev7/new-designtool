import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLockOff24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    <path d="M12.75 17a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z" />
                    <path
                        fillRule="evenodd"
                        d="M1.53.47A.75.75 0 00.47 1.53L6 7.06v3.044a2.751 2.751 0 00-2 2.646v7.5A2.75 2.75 0 006.75 23h10.5c1.271 0 2.34-.862 2.656-2.034l2.564 2.564a.75.75 0 101.06-1.06l-22-22zM18.5 19.56l-8.06-8.06H6.75c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-.69zM8.94 10L7.5 8.56V10h1.44z"
                        clipRule="evenodd"
                    />
                    <path d="M12 2.5a4.636 4.636 0 00-3.195 1.258c-.123.117-.238.24-.345.368a.75.75 0 01-1.153-.959c.144-.173.298-.338.463-.496A6.136 6.136 0 0112 1c1.58 0 3.102.597 4.23 1.671A5.632 5.632 0 0118 6.75v3.354c1.154.326 2 1.387 2 2.646v2.75a.75.75 0 01-1.5 0v-2.75c0-.69-.56-1.25-1.25-1.25H14.5a.75.75 0 010-1.5h2V6.75a4.133 4.133 0 00-1.305-2.992A4.636 4.636 0 0012 2.5z" />
                </g>
            </svg>
        );
    }
);
