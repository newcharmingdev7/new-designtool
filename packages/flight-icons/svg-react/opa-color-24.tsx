import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconOpaColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#BFBFBF"
                    d="M5.57 11.916a8.076 8.076 0 011.724-3.283c-.265-.21-1.315-1.078-1.364-1.76C5.854 5.755 6.904 2 6.904 2S3.73 6.109 3.51 7.77c-.175 1.302 1.83 3.889 2.042 4.151v-.005h.018zm12.913-.066v.01c0 .004.005.009.005.014.35-.45 2.167-2.859 2.001-4.105C20.27 6.11 17.096 2 17.096 2s1.05 3.756.974 4.872c-.045.654-1 1.47-1.32 1.728a7.979 7.979 0 011.733 3.25z"
                />
                <path
                    fill="#566366"
                    d="M18.483 11.854v-.01a8.041 8.041 0 00-1.732-3.249c-1.234-1.384-2.913-2.214-4.722-2.214v4.438h.005c.444.005.803.391.803.864 0 .057-.004.11-.013.162-.072.396-.395.697-.79.701h-.014v1.647l-.008 7.798h.157s1.705-2.625 2.625-3.374c1.077-.879 3.69-1.966 3.69-1.966v-4.744l.013-.005c-.005-.01-.005-.024-.01-.033 0-.005 0-.01-.004-.014z"
                />
                <path
                    fill="#7D9199"
                    d="M12.02 14.197v-1.646a.825.825 0 01-.776-.635.935.935 0 01-.032-.229c0-.477.364-.863.813-.863h.004V6.4c-1.818 0-3.5.835-4.735 2.233-.785.888-1.387 2.01-1.723 3.284h-.014v4.805s2.612 1.088 3.69 1.966c.893.73 2.616 3.312 2.616 3.312h.162v-.005h-.01l.005-7.798z"
                />
            </svg>
        );
    }
);
