import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSave16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M1 3.25A2.25 2.25 0 013.25 1h6.879a2.25 2.25 0 011.59.659l2.622 2.621c.422.422.659.995.659 1.591v6.879A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h.8V9.25a1.2 1.2 0 011.2-1.2h5.5a1.2 1.2 0 011.2 1.2v4.25h.8a.75.75 0 00.75-.75V5.871a.75.75 0 00-.22-.53L10.66 2.72a.75.75 0 00-.53-.22H5.45v2.05h3.8a.7.7 0 010 1.4h-4a1.2 1.2 0 01-1.2-1.2V2.5h-.8zm7.3 11h-5.1V9.45h5.1v4.05z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
