import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFolderPlusFill24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M1 4.75A2.75 2.75 0 013.75 2h5.672c.729 0 1.428.29 1.944.805l.829.829c.234.234.552.366.883.366h7.172A2.75 2.75 0 0123 6.75v12.5A2.75 2.75 0 0120.25 22H3.75A2.75 2.75 0 011 19.25V8.75A.75.75 0 011.75 8h18.5a.75.75 0 000-1.5H1.75A.75.75 0 011 5.75v-1zm10.75 5.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5H12.5v2.25a.75.75 0 01-1.5 0V15H8.75a.75.75 0 010-1.5H11v-2.25a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
