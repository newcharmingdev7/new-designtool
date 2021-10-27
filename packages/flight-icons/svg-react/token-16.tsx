import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconToken16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M5.791 3.318L3.316 5.793a1 1 0 000 1.414l2.475 2.475a1 1 0 001.415 0L9.68 7.207a1 1 0 000-1.414L7.206 3.318a1 1 0 00-1.415 0zm.707 4.95L4.731 6.5l1.767-1.768L8.266 6.5 6.498 8.268z" />
                    <path d="M0 6.5a6.5 6.5 0 0112.346-2.845 6.5 6.5 0 11-8.691 8.691A6.5 6.5 0 010 6.5zm6.5-5a5 5 0 100 10 5 5 0 000-10zm6.5 5c0-.201-.01-.4-.027-.597a5 5 0 11-7.07 7.07A6.5 6.5 0 0013 6.5z" />
                </g>
            </svg>
        );
    }
);
