import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconFlag16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    d="M5.375 1c-1.072 0-1.827.185-2.337.396a3.125 3.125 0 00-.58.309 2.006 2.006 0 00-.233.188l-.007.007-.004.004-.002.002s.898.871-.001.001A.75.75 0 002 2.43V14.25a.75.75 0 001.5 0v-3.275c.033-.016.07-.033.11-.05.31-.128.868-.282 1.765-.282.815 0 1.503.276 2.338.621l.043.018c.796.33 1.735.718 2.869.718 1.072 0 1.827-.185 2.337-.396a3.13 3.13 0 00.58-.309 2.03 2.03 0 00.214-.17l.01-.009.009-.009.008-.007.003-.004.002-.002s-.899-.872.001-.001A.75.75 0 0014 10.57V2.43a.75.75 0 00-1.27-.54 1.642 1.642 0 01-.34.186c-.31.128-.868.282-1.765.282-.815 0-1.503-.276-2.338-.621l-.043-.018C7.448 1.388 6.51 1 5.375 1zM3.5 9.379V2.832c.033-.016.07-.033.11-.05.31-.128.868-.282 1.765-.282.815 0 1.503.276 2.338.622l.043.017c.796.33 1.735.718 2.869.718.786 0 1.401-.1 1.875-.236v6.547a2.27 2.27 0 01-.11.05c-.31.128-.868.282-1.765.282-.815 0-1.503-.276-2.338-.622l-.043-.017c-.796-.33-1.735-.718-2.869-.718-.786 0-1.401.1-1.875.236z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
