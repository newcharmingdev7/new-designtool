import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconIdentityUser16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5.187 10.482A2.324 2.324 0 016.625 10h2.75c.515 0 1.034.16 1.438.482.41.325.687.807.687 1.359v.409a.75.75 0 01-1.5 0v-.41c0-.026-.012-.098-.119-.183a.828.828 0 00-.506-.157h-2.75a.828.828 0 00-.506.157c-.107.085-.119.157-.119.184v.409a.75.75 0 01-1.5 0v-.41c0-.55.277-1.033.687-1.358z" />
                    <path
                        fillRule="evenodd"
                        d="M8 4.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM7 7a1 1 0 112 0 1 1 0 01-2 0z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M5.25 0C4.56 0 4 .56 4 1.25V2H2.25A2.25 2.25 0 000 4.25v8.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-8.5A2.25 2.25 0 0013.75 2H12v-.75C12 .56 11.44 0 10.75 0h-5.5zm6.5 3.5c-.228.304-.591.5-1 .5h-5.5c-.409 0-.772-.196-1-.5h-2a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75h-2zm-1.25-1h-5v-1h5v1z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
