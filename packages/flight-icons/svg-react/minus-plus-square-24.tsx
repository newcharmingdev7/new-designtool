import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMinusPlusSquare24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5.25 7.75A.75.75 0 016 7h4.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM15.75 12.25A.75.75 0 0015 13v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2a.75.75 0 00-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M4.25 1.5A2.75 2.75 0 001.5 4.25v8A2.75 2.75 0 004.25 15H9v4.75a2.75 2.75 0 002.75 2.75h8a2.75 2.75 0 002.75-2.75v-8A2.75 2.75 0 0019.75 9H15V4.25a2.75 2.75 0 00-2.75-2.75h-8zM13.5 9V4.25c0-.69-.56-1.25-1.25-1.25h-8C3.56 3 3 3.56 3 4.25v8c0 .69.56 1.25 1.25 1.25H9v-1.75A2.75 2.75 0 0111.75 9h1.75zm-3 10.75c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25v8z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
