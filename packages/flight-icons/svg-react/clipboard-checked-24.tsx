import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconClipboardChecked24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M8.75 1A1.75 1.75 0 007 2.75V3H5.75A2.75 2.75 0 003 5.75v14.5A2.75 2.75 0 005.75 23h12.5A2.75 2.75 0 0021 20.25V5.75A2.75 2.75 0 0018.25 3H17v-.25A1.75 1.75 0 0015.25 1h-6.5zM8.5 2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25h-6.5a.25.25 0 01-.25-.25v-1.5zm8.28 7.47a.75.75 0 00-1.06 0l-5.47 5.47-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l6-6a.75.75 0 000-1.06z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
