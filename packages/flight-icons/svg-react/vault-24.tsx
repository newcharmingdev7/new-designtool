import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconVault24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    <path
                        fillRule="evenodd"
                        d="M8 12a6 6 0 1112 0 6 6 0 01-12 0zm2.332-2.607A4.48 4.48 0 009.5 12c0 .972.308 1.872.832 2.607l1.45-1.45A2.49 2.49 0 0111.5 12c0-.417.102-.81.283-1.156l-1.451-1.451zm1.06-1.061l1.452 1.45A2.49 2.49 0 0114 9.5c.417 0 .81.102 1.156.283l1.451-1.451A4.48 4.48 0 0014 7.5a4.48 4.48 0 00-2.607.832zm1.452 5.885l-1.451 1.451A4.48 4.48 0 0014 16.5a4.48 4.48 0 002.607-.832l-1.45-1.45A2.49 2.49 0 0114 14.5a2.49 2.49 0 01-1.156-.283zM18.5 12a4.48 4.48 0 01-.832 2.607l-1.45-1.45c.18-.346.282-.74.282-1.157 0-.417-.102-.81-.283-1.156l1.451-1.451A4.48 4.48 0 0118.5 12zM13 12a1 1 0 112 0 1 1 0 01-2 0z"
                        clipRule="evenodd"
                    />
                    <path d="M4.75 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 014.75 5zM5.5 15.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" />
                    <path
                        fillRule="evenodd"
                        d="M1 4.75A2.75 2.75 0 013.75 2h16.5A2.75 2.75 0 0123 4.75v14.5A2.75 2.75 0 0120.25 22h-.125v1a.875.875 0 01-1.75 0v-1H5.625v1a.875.875 0 01-1.75 0v-1H3.75A2.75 2.75 0 011 19.25V4.75zM3.75 3.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h16.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
