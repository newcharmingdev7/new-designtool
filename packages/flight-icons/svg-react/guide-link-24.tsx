import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGuideLink24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                <g fill={color}>
                    <path d="M19.75 2a.75.75 0 000 1.5h1.69l-2.97 2.97a.75.75 0 001.06 1.06l2.97-2.97v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5z" />
                    <path
                        fillRule="evenodd"
                        d="M2.75 3A1.75 1.75 0 001 4.75v12.5c0 .966.784 1.75 1.75 1.75h5.175c2.342 0 3.325 1.19 3.325 2.25A.749.749 0 0012 22a.75.75 0 00.75-.75c0-1.06.983-2.25 3.325-2.25h5.175A1.75 1.75 0 0023 17.25v-7a.75.75 0 10-1.5 0v7a.25.25 0 01-.25.25h-5.175c-1.329 0-2.48.345-3.325.943V7.75c0-.921.199-1.675.609-2.21.393-.512 1.055-.92 2.204-1.018a.75.75 0 10-.126-1.495c-1.481.126-2.57.689-3.269 1.6-.059.078-.115.158-.168.238a3.789 3.789 0 00-.323-.426C10.858 3.505 9.6 3 7.9 3H2.75zm8.5 4.75c0-.99-.229-1.783-.702-2.323C10.092 4.906 9.3 4.5 7.9 4.5H2.75a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h5.175c1.329 0 2.48.345 3.325.943V7.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
