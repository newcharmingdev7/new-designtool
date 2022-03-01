import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGift16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M1.5 2.75c0 .438.103.866.297 1.25H.75a.75.75 0 00-.75.75v3.5c0 .414.336.75.75.75H2v6.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V9h1.25a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-.547A2.78 2.78 0 0014.21.81 2.697 2.697 0 0012.286 0c-1.8 0-2.878 1.318-3.46 2.394-.262.486-.449.967-.576 1.351a8.466 8.466 0 00-.577-1.351C7.093 1.318 6.013 0 4.214 0 3.49 0 2.798.293 2.29.81a2.769 2.769 0 00-.79 1.94zM4.214 1.5c-.317 0-.625.128-.854.361-.229.234-.36.553-.36.889 0 .336.131.655.36.889.23.233.537.361.854.361h2.537a6.754 6.754 0 00-.397-.894c-.5-.924-1.189-1.606-2.14-1.606zM9.75 4h2.537c.317 0 .625-.128.854-.361.229-.234.36-.553.36-.889 0-.336-.131-.655-.36-.889a1.197 1.197 0 00-.854-.361c-.951 0-1.64.682-2.14 1.606A6.753 6.753 0 009.75 4zM9 5.5v2h5.5v-2H9zm-1.5 0v2h-6v-2h6zm1.5 9h3.5V9H9v5.5zM7.5 9v5.5h-4V9h4z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
