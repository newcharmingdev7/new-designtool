import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconDelay16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M1.5 8a6.5 6.5 0 016.744-6.496.75.75 0 10.055-1.499 8 8 0 107.036 11.193.75.75 0 00-1.375-.6 6.722 6.722 0 01-.22.453A6.5 6.5 0 011.5 8zM10.726 1.238a.75.75 0 011.013-.312c.177.094.35.194.518.3a.75.75 0 01-.799 1.27 6.512 6.512 0 00-.42-.244.75.75 0 01-.312-1.014zM13.74 3.508a.75.75 0 011.034.235c.106.168.206.34.3.518a.75.75 0 11-1.326.702 6.452 6.452 0 00-.243-.421.75.75 0 01.235-1.034zM15.217 6.979a.75.75 0 01.777.722 8.034 8.034 0 01.002.552.75.75 0 01-1.5-.047 6.713 6.713 0 000-.45.75.75 0 01.721-.777z" />
                    <path d="M7.75 3a.75.75 0 01.75.75v3.786l2.085 1.043a.75.75 0 11-.67 1.342l-2.5-1.25A.75.75 0 017 8V3.75A.75.75 0 017.75 3z" />
                </g>
            </svg>
        );
    }
);
