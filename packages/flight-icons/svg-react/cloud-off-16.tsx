import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M1.22 1.22a.75.75 0 011.06 0l12.5 12.5a.75.75 0 11-1.06 1.06l-1.11-1.11c-.258.053-.523.08-.791.08H6.094a5.907 5.907 0 01-3.085-.865A5.783 5.783 0 01.85 10.539a5.674 5.674 0 01-.57-3.117v-.004a5.701 5.701 0 011.196-2.943c.284-.361.61-.686.97-.968L1.22 2.28a.75.75 0 010-1.06zm2.297 3.357a4.299 4.299 0 00-.863.827 4.201 4.201 0 00-.882 2.165v.003a4.174 4.174 0 00.42 2.296c.356.713.91 1.315 1.6 1.737a4.407 4.407 0 002.298.645h5.099L3.517 4.577z"
                        clipRule="evenodd"
                    />
                    <path d="M6.38 2.954a.75.75 0 01.884-.586A5.87 5.87 0 0110.11 3.83 5.743 5.743 0 0111.564 6h.255a3.96 3.96 0 012.775 1.13 3.848 3.848 0 011.156 2.745c0 .409-.066.81-.19 1.193a.75.75 0 11-1.426-.468c.076-.232.116-.477.116-.725 0-.626-.253-1.228-.707-1.675a2.46 2.46 0 00-1.724-.7h-.802a.75.75 0 01-.725-.56 4.233 4.233 0 00-1.206-2.014 4.37 4.37 0 00-2.119-1.088.75.75 0 01-.587-.884z" />
                </g>
            </svg>
        );
    }
);
