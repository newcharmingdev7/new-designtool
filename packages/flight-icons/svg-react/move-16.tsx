import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMove16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M7.463.057A.748.748 0 007.22.22l-2 2a.75.75 0 001.06 1.06L7 2.56V7H2.56l.72-.72a.75.75 0 00-1.06-1.06l-2 2a.748.748 0 000 1.06l2 2a.75.75 0 101.06-1.06l-.72-.72H7v4.44l-.72-.72a.75.75 0 00-1.06 1.06l2 2a.748.748 0 001.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72V8.5h4.44l-.72.72a.75.75 0 101.06 1.06l2-2a.748.748 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H8.5V2.56l.72.72a.75.75 0 101.06-1.06l-2-2a.748.748 0 00-.817-.163z"
                />
            </svg>
        );
    }
);
