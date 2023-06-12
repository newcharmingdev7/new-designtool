import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMessageCircle24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12.343 3.5a8.157 8.157 0 11-3.765 15.396 1.439 1.439 0 00-.688-.139c-.2.003-.416.033-.628.074-.426.082-.922.227-1.417.391-.566.188-1.157.412-1.684.621.204-.51.421-1.081.606-1.63.169-.505.318-1.012.403-1.448.042-.217.072-.438.075-.643a1.466 1.466 0 00-.141-.7A8.157 8.157 0 0112.343 3.5zM3.7 21.655a37.13 37.13 0 012.618-1.01c.47-.156.896-.277 1.228-.341a2.28 2.28 0 01.398-.047A9.657 9.657 0 0022 11.657 9.657 9.657 0 0012.343 2a9.657 9.657 0 00-8.598 14.06v.038a2.32 2.32 0 01-.048.382c-.066.34-.191.776-.352 1.255a36.658 36.658 0 01-1.21 3.052l-.05.114-.014.03-.004.009a.75.75 0 00.982.998l.648-.282.003-.001zm.043-5.621v.002-.002z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
