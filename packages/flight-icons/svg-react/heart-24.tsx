import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconHeart24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M14.508 3.457a6.246 6.246 0 014.693 0 6.154 6.154 0 011.993 1.304 6.024 6.024 0 011.336 1.957 5.931 5.931 0 010 4.626 6.022 6.022 0 01-1.336 1.957l-8.67 8.485a.75.75 0 01-1.049 0l-8.67-8.485A5.974 5.974 0 011 9.03c0-1.605.651-3.14 1.806-4.27a6.205 6.205 0 014.34-1.76c1.624 0 3.185.631 4.339 1.76l.515.504.515-.504a6.154 6.154 0 011.993-1.304zm5.637 2.376a4.653 4.653 0 00-1.508-.986 4.746 4.746 0 00-3.566 0 4.653 4.653 0 00-1.507.986l-1.04 1.018a.75.75 0 01-1.049 0l-1.04-1.018a4.705 4.705 0 00-3.29-1.332c-1.237 0-2.42.48-3.29 1.332A4.474 4.474 0 002.5 9.031c0 1.196.485 2.347 1.355 3.198L12 20.2l8.145-7.972c.43-.421.771-.921 1.003-1.47a4.431 4.431 0 000-3.456 4.524 4.524 0 00-1.003-1.47z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
