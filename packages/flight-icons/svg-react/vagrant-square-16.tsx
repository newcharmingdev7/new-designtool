import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVagrantSquare16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M13.867.667H2.133c-.384 0-.632 0-.821.016-.181.014-.248.04-.281.056a.667.667 0 00-.292.292c-.016.033-.042.1-.056.28-.016.19-.016.438-.016.822v11.734c0 .384 0 .632.016.821.014.181.04.248.056.281a.666.666 0 00.292.292c.033.017.1.042.28.056.19.016.438.016.822.016h11.734c.384 0 .632 0 .821-.016.181-.014.248-.04.281-.056a.666.666 0 00.292-.292c.017-.033.042-.1.056-.28.016-.19.016-.438.016-.822V2.133c0-.384 0-.632-.016-.821-.014-.181-.04-.248-.056-.281a.666.666 0 00-.292-.292c-.033-.016-.1-.042-.28-.056a11.336 11.336 0 00-.822-.016zM.145.728C0 1.013 0 1.387 0 2.133v11.734c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h11.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405V2.133c0-.746 0-1.12-.145-1.405a1.334 1.334 0 00-.583-.583C14.987 0 14.613 0 13.867 0H2.133c-.746 0-1.12 0-1.405.145C.478.273.273.477.145.728z"
                    clipRule="evenodd"
                />
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M11.175 3.469L9.202 4.612v.702L8 8.153 6.798 5.314v-.702L4.825 3.47l-1.2.696v.808l2.672 6.571L8 12.531V10.07l.8-.464 1.602-3.595v-.703l1.973-1.143-1.2-.696zM6.798 4.612v.702L8 8.153v.989l-.8.464L5.597 6.01v-.703l1.2-.696z"
                        clipRule="evenodd"
                    />
                    <path
                        d="M12.375 4.165l-1.973 1.143v.703L8.8 9.606l-.8.464v2.461l1.703-.986 2.672-6.571v-.809zM6.798 5.314v-.702l-1.2.696v.703L7.2 9.606l.8-.464v-.99L6.798 5.315z"
                        opacity={0.7}
                    />
                </g>
            </svg>
        );
    }
);
