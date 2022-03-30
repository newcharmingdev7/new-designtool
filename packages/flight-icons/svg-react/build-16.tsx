import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBuild16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M8.603 2.549A4.251 4.251 0 005.47 8.696a1.076 1.076 0 01-.255 1.312l-3 2.374a.75.75 0 01-.93-1.176l2.701-2.139A5.75 5.75 0 019.47 1.004c.53.02.924.363 1.066.797.137.42.035.902-.306 1.243L8.75 4.523v1.596l1.13 1.13h1.597l1.48-1.479a1.22 1.22 0 011.241-.306c.435.142.778.537.798 1.066a5.75 5.75 0 01-7.978 5.52l-2.102 2.664a.75.75 0 01-1.177-.928l2.333-2.959a1.076 1.076 0 011.297-.265 4.251 4.251 0 006.082-3.165L12.41 8.438c-.199.2-.47.312-.75.312h-1.96c-.282 0-.552-.112-.751-.312L7.56 7.052c-.199-.2-.311-.47-.311-.751V4.34c0-.281.112-.551.311-.75l1.042-1.042z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
