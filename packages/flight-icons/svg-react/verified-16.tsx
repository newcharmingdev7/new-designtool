import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconVerified16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    <path d="M11.28 5.72a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 3.47-3.47a.75.75 0 011.06 0z" />
                    <path
                        fillRule="evenodd"
                        d="M6.402 1.22a2.75 2.75 0 013.196 0l.69.493c.154.11.332.184.519.215l.865.146a2.75 2.75 0 012.254 2.254l.146.866c.031.187.105.364.215.518l.493.69a2.75 2.75 0 010 3.197l-.493.69c-.11.154-.184.33-.215.518l-.146.865a2.75 2.75 0 01-2.254 2.254l-.865.146a1.25 1.25 0 00-.519.216l-.69.492a2.75 2.75 0 01-3.196 0l-.69-.492a1.25 1.25 0 00-.519-.216l-.865-.146a2.75 2.75 0 01-2.254-2.254l-.146-.865a1.25 1.25 0 00-.215-.519l-.493-.69a2.75 2.75 0 010-3.196l.493-.69a1.25 1.25 0 00.215-.518l.146-.866a2.75 2.75 0 012.254-2.254l.865-.146a1.25 1.25 0 00.519-.215l.69-.493zm2.324 1.22a1.25 1.25 0 00-1.453 0l-.69.493a2.75 2.75 0 01-1.14.474l-.865.146a1.25 1.25 0 00-1.025 1.025l-.146.865a2.75 2.75 0 01-.474 1.141l-.492.69a1.25 1.25 0 000 1.453l.492.69c.243.339.405.729.474 1.14l.146.865c.089.525.5.936 1.025 1.025l.865.146c.411.07.801.232 1.14.474l.69.493a1.25 1.25 0 001.454 0l.69-.493a2.75 2.75 0 011.14-.474l.865-.146a1.25 1.25 0 001.025-1.024l.146-.866a2.75 2.75 0 01.474-1.14l.492-.69a1.25 1.25 0 000-1.453l-.492-.69a2.75 2.75 0 01-.474-1.14l-.146-.866a1.25 1.25 0 00-1.025-1.025l-.865-.146a2.75 2.75 0 01-1.14-.474l-.69-.492z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
