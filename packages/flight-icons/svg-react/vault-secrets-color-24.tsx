import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultSecretsColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#FFD814">
                    <path d="M11.328 16.2v3h1.656v-6.384h6.384v-1.632h-3c-.696 0-1.392.048-2.088.144l-.648.072.504-.408c.552-.432 1.08-.888 1.584-1.392l2.088-2.112-1.152-1.152-2.112 2.112c-.504.504-.96 1.032-1.392 1.584l-.408.504.072-.648c.096-.696.144-1.392.144-2.088v-3h-1.632v6.384H4.944v1.632h3c.696 0 1.392-.048 2.088-.144l.648-.072-.504.408c-.552.432-1.08.888-1.584 1.392L6.48 16.512l1.152 1.152 2.112-2.112c.504-.504.96-1.032 1.392-1.584l.408-.504-.072.648a15.264 15.264 0 00-.144 2.088z" />
                    <path d="M14.568 14.424v1.152l2.088 2.088 1.152-1.152-2.088-2.088h-1.152zM6.48 7.488l2.088 2.088H9.72V8.424L7.632 6.336 6.48 7.488z" />
                    <path
                        fillRule="evenodd"
                        d="M1.992 0h20.016c1.104 0 1.992.888 1.968 1.992v19.992a1.987 1.987 0 01-1.992 1.992H1.992A1.987 1.987 0 010 21.984V1.992C0 .888.888 0 1.992 0zm21.024 2.016c0-.552-.456-1.008-1.008-1.008L1.992.984C1.44.984.984 1.44.984 1.992v20.016c0 .552.456 1.008 1.008 1.008h20.016c.552 0 1.008-.456 1.008-1.008V2.016z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
