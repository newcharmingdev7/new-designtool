import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFolderStar24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3.75 3.5c-.69 0-1.25.56-1.25 1.25V7h16.75a.75.75 0 010 1.5H2.5v10.75c0 .69.56 1.25 1.25 1.25h6.75a.75.75 0 010 1.5H3.75A2.75 2.75 0 011 19.25V4.75A2.75 2.75 0 013.75 2h5.672c.729 0 1.428.29 1.944.805l.829.829c.234.234.552.366.883.366h7.172A2.75 2.75 0 0123 6.75v5.5a.75.75 0 01-1.5 0v-5.5c0-.69-.56-1.25-1.25-1.25h-7.172a2.75 2.75 0 01-1.944-.805l-.829-.829a1.25 1.25 0 00-.883-.366H3.75z" />
                    <path
                        fillRule="evenodd"
                        d="M17.674 10.42a.75.75 0 00-1.348 0l-1.68 3.43-3.755.554a.75.75 0 00-.416 1.277l2.72 2.67-.642 3.773a.75.75 0 001.09.789L17 21.133l3.357 1.78a.75.75 0 001.09-.789l-.642-3.773 2.72-2.67a.75.75 0 00-.416-1.277l-3.755-.553-1.68-3.43zm-1.854 4.445l1.18-2.41 1.18 2.41a.75.75 0 00.565.412l2.652.39-1.922 1.888a.75.75 0 00-.214.661l.452 2.658-2.362-1.252a.75.75 0 00-.702 0l-2.362 1.252.452-2.658a.75.75 0 00-.214-.661l-1.922-1.887 2.652-.391a.75.75 0 00.565-.412z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
