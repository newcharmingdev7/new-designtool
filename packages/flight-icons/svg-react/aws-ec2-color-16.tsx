import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAwsEc2Color16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#9D5025"
                    d="M1.702 2.98L1 3.312v9.376l.702.332 2.842-4.777L1.702 2.98z"
                />
                <path
                    fill="#F58536"
                    d="M3.339 12.657l-1.637.363V2.98l1.637.353v9.324z"
                />
                <path
                    fill="#9D5025"
                    d="M2.476 2.612l.863-.406 4.096 6.216-4.096 5.372-.863-.406V2.612z"
                />
                <path
                    fill="#F58536"
                    d="M5.38 13.248l-2.041.546V2.206l2.04.548v10.494z"
                />
                <path
                    fill="#9D5025"
                    d="M4.3 1.75l1.08-.512 6.043 7.864-6.043 5.66-1.08-.511V1.749z"
                />
                <path
                    fill="#F58536"
                    d="M7.998 13.856l-2.618.906V1.238l2.618.908v11.71z"
                />
                <path
                    fill="#9D5025"
                    d="M6.602.66L7.998 0l6.538 8.453L7.998 16l-1.396-.66V.66z"
                />
                <path
                    fill="#F58536"
                    d="M15 12.686L7.998 16V0L15 3.314v9.372z"
                />
            </svg>
        );
    }
);
