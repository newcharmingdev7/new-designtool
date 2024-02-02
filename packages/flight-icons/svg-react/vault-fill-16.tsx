import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M6.414 6.85h.793v-.794h-.793v.794zM6.414 5.659h.793v-.793h-.793v.793zM7.604 8.04h.793v-.794h-.793v.794zM7.604 6.85h.793v-.794h-.793v.794zM7.604 5.659h.793v-.793h-.793v.793zM8.787 6.85h.794v-.794h-.794v.794zM8.787 4.866v.793h.794v-.793h-.794z" />
                    <path
                        fillRule="evenodd"
                        d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm5.982 12.697L3 3h10l-5.018 9.697z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
