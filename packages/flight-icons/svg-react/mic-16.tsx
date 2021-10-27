import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMic16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M8 0c-.78 0-1.538.29-2.104.821A2.797 2.797 0 005 2.861V8.14c0 .775.328 1.507.896 2.04.566.53 1.323.821 2.104.821.78 0 1.538-.29 2.104-.821A2.797 2.797 0 0011 8.139V2.86c0-.775-.329-1.507-.896-2.04A3.077 3.077 0 008 0zM6.922 1.915A1.578 1.578 0 018 1.5c.413 0 .8.154 1.078.415.276.26.422.601.422.946V8.14c0 .345-.146.686-.422.946A1.578 1.578 0 018 9.5c-.413 0-.8-.154-1.078-.415-.276-.26-.422-.601-.422-.946V2.86c0-.345.146-.686.422-.946z"
                        clipRule="evenodd"
                    />
                    <path d="M4 6.75a.75.75 0 00-1.5 0v1.385a5.3 5.3 0 001.619 3.801A5.553 5.553 0 007.25 13.45v1.05H5.5a.75.75 0 000 1.5h5a.75.75 0 000-1.5H8.75v-1.05a5.553 5.553 0 003.131-1.514A5.3 5.3 0 0013.5 8.135V6.75a.75.75 0 00-1.5 0v1.385a3.8 3.8 0 01-1.164 2.725A4.071 4.071 0 018 12a4.071 4.071 0 01-2.836-1.14A3.8 3.8 0 014 8.135V6.75z" />
                </g>
            </svg>
        );
    }
);
