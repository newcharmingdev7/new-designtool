import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAlertTriangleFill24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 2c-.472 0-.934.127-1.342.366a2.75 2.75 0 00-.984.99L1.363 17.81l-.006.01a2.86 2.86 0 00-.007 2.758c.23.423.566.778.975 1.03.41.25.877.386 1.357.392h16.637c.479-.006.947-.142 1.356-.393.41-.25.744-.606.976-1.029a2.86 2.86 0 00-.008-2.758L14.328 3.36l-.002-.004a2.75 2.75 0 00-.984-.99A2.651 2.651 0 0012 2zm-.75 6.75a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5zM11 17a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
