import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMinimizeAlt16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M5.25.953a.75.75 0 01.75.75V3.75A2.25 2.25 0 013.75 6H1.703a.75.75 0 110-1.5H3.75a.75.75 0 00.75-.75V1.703a.75.75 0 01.75-.75zm5.5 0a.75.75 0 01.75.75V3.75c0 .414.336.75.75.75h2.047a.75.75 0 010 1.5H12.25A2.25 2.25 0 0110 3.75V1.703a.75.75 0 01.75-.75zM.953 10.75a.75.75 0 01.75-.75H3.75A2.25 2.25 0 016 12.25v2.047a.75.75 0 01-1.5 0V12.25a.75.75 0 00-.75-.75H1.703a.75.75 0 01-.75-.75zM10 12.25A2.25 2.25 0 0112.25 10h2.047a.75.75 0 110 1.5H12.25a.75.75 0 00-.75.75v2.047a.75.75 0 01-1.5 0V12.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
