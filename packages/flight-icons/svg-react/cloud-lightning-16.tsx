import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudLightning16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M7.235 1.123a6.041 6.041 0 00-3.303.25A6.02 6.02 0 001.26 3.326a5.988 5.988 0 00.515 7.929.75.75 0 001.055-1.066 4.482 4.482 0 01-.386-5.942A4.52 4.52 0 014.451 2.78a4.541 4.541 0 014.688.961 4.496 4.496 0 011.26 2.135.75.75 0 00.726.561h.83c.676 0 1.324.268 1.8.743a2.524 2.524 0 01-.418 3.914.75.75 0 00.812 1.262 4.024 4.024 0 00.665-6.239 4.051 4.051 0 00-2.859-1.18h-.28a5.998 5.998 0 00-1.504-2.285 6.028 6.028 0 00-2.936-1.529z" />
                    <path d="M9.053 7.257a.75.75 0 00-1.106-1.014l-2.75 3a.75.75 0 00.316 1.218l3.403 1.135-1.969 2.147a.75.75 0 001.106 1.014l2.75-3a.75.75 0 00-.316-1.218L7.084 9.404l1.969-2.147z" />
                </g>
            </svg>
        );
    }
);
