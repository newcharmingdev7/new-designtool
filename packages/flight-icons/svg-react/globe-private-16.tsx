import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGlobePrivate16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M5.58 7C5.835 5.124 6.667 3.335 8 1.836a10.074 10.074 0 011.806 2.878.75.75 0 101.388-.568 11.412 11.412 0 00-1.322-2.372A6.503 6.503 0 0114.5 8 .75.75 0 0016 8a8 8 0 10-11.31 7.285.75.75 0 10.622-1.365A6.504 6.504 0 011.519 8.5h2.503c.04.563.122 1.12.248 1.668a.75.75 0 101.462-.336c-.1-.438-.17-.883-.205-1.332H7A.75.75 0 007 7H5.58zM4.07 7H1.576a6.508 6.508 0 014.552-5.226A11.095 11.095 0 004.068 7z"
                        clipRule="evenodd"
                    />
                    <path d="M11.75 12.25a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M8.518 9.012c.035-.627.13-1.235.366-1.738.174-.37.435-.704.816-.94C10.08 6.101 10.52 6 11 6c.48 0 .921.1 1.3.334.381.236.642.57.816.94.236.503.331 1.111.366 1.738A2.25 2.25 0 0115.5 11.25v2.5A2.25 2.25 0 0113.25 16h-4.5a2.25 2.25 0 01-2.25-2.25v-2.5a2.25 2.25 0 012.018-2.238zM10.022 9c.032-.481.102-.838.22-1.087a.662.662 0 01.245-.302c.09-.055.243-.111.513-.111s.423.056.513.111c.087.054.17.141.246.302.117.249.187.606.219 1.087h-1.956zm3.228 1.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 01.75-.75h4.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
