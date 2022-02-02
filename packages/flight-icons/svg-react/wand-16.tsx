import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWand16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M4.083.183a.5.5 0 00-.65.65l.393.981a.5.5 0 010 .371l-.393.982a.5.5 0 00.65.65l.981-.393a.5.5 0 01.372 0l.98.392a.5.5 0 00.65-.65l-.392-.98a.5.5 0 010-.372l.393-.981a.5.5 0 00-.65-.65l-.981.392a.5.5 0 01-.372 0l-.98-.392z" />
                    <path
                        fillRule="evenodd"
                        d="M11.414 4.104a2 2 0 00-2.828 0L.808 11.882a2 2 0 002.828 2.828l7.778-7.778a2 2 0 000-2.828zm-1.768 1.06a.5.5 0 11.707.707l-.883.884-.707-.707.883-.884zM7.702 7.11l.707.707-5.834 5.834a.5.5 0 11-.707-.707l5.834-5.834z"
                        clipRule="evenodd"
                    />
                    <path d="M10.572 11.21a.5.5 0 010-.92l1.219-.522a.5.5 0 00.263-.262l.522-1.22a.5.5 0 01.92 0l.521 1.22a.5.5 0 00.263.262l1.219.522a.5.5 0 010 .92l-1.219.522a.5.5 0 00-.263.263l-.522 1.218a.5.5 0 01-.919 0l-.522-1.218a.5.5 0 00-.263-.263l-1.219-.522zM12.833.183a.5.5 0 00-.65.65l.293.731a.5.5 0 010 .371l-.293.732a.5.5 0 00.65.65l.731-.293a.5.5 0 01.372 0l.73.292a.5.5 0 00.65-.65l-.292-.73a.5.5 0 010-.372l.293-.731a.5.5 0 00-.65-.65l-.731.292a.5.5 0 01-.372 0l-.73-.292z" />
                </g>
            </svg>
        );
    }
);
