import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconKey16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M9.16 3.657A2.236 2.236 0 0110.752 3a2.248 2.248 0 11-2.078 3.11l-.001-.002a2.243 2.243 0 01.489-2.451zm1.06 1.061a.737.737 0 01.815-.16.748.748 0 01-.284 1.44.748.748 0 01-.532-1.278l.001-.002z" />
                    <path d="M10.354 0a5.68 5.68 0 00-4.906 2.846 5.68 5.68 0 00-.466 4.555L.22 12.162a.75.75 0 00-.22.53v2.558c0 .414.336.75.75.75h2.547a.75.75 0 00.53-.22l.655-.655a1.072 1.072 0 00.311-.784v-.64h.548c.31 0 .618-.123.843-.355l.008-.008c.204-.216.324-.498.33-.801v-.556h.676c.288 0 .566-.117.767-.327l.638-.637a5.664 5.664 0 004.55-.468 5.683 5.683 0 002.798-4.152v-.001a5.68 5.68 0 00-1.602-4.742A5.619 5.619 0 0010.354 0zm-.548 1.536a4.12 4.12 0 013.482 1.178 4.18 4.18 0 011.176 3.483 4.183 4.183 0 01-2.054 3.05 4.163 4.163 0 01-3.671.221.75.75 0 00-.143-.043l-.023-.005a.806.806 0 00-.714.219l-.842.842H5.973a.951.951 0 00-.95.951v.768h-.779a.951.951 0 00-.95.952v1.04l-.308.308H1.5v-1.497L6.355 8.15c.22-.22.311-.567.174-.888a4.178 4.178 0 01.221-3.67 4.18 4.18 0 013.053-2.054h.003z" />
                </g>
            </svg>
        );
    }
);
