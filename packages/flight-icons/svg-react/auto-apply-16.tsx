import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAutoApply16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M7.734 4.192C6.572 3.402 5 4.234 5 5.64v4.722c0 1.405 1.572 2.237 2.734 1.447l3.472-2.36a1.75 1.75 0 000-2.895l-3.472-2.36zM6.5 5.64c0-.2.225-.32.39-.206l3.472 2.36a.25.25 0 010 .414l-3.471 2.36a.25.25 0 01-.391-.206V5.639z" />
                    <path d="M7.25 0A1.75 1.75 0 005.5 1.728a6.715 6.715 0 00-.167.07 1.75 1.75 0 00-2.46.015l-1.06 1.06a1.75 1.75 0 00-.015 2.46 6.712 6.712 0 00-.07.167A1.75 1.75 0 000 7.25v1.5c0 .96.772 1.738 1.728 1.75l.07.167a1.75 1.75 0 00.015 2.46l1.06 1.06a1.75 1.75 0 002.46.015l.167.07A1.75 1.75 0 007.25 16h1.5a1.75 1.75 0 001.75-1.728l.167-.07a1.75 1.75 0 002.46-.015l1.06-1.06a1.75 1.75 0 00.015-2.46l.07-.167A1.75 1.75 0 0016 8.75v-1.5a1.75 1.75 0 00-1.728-1.75 6.185 6.185 0 00-.07-.167 1.75 1.75 0 00-.015-2.46l-1.06-1.06a1.75 1.75 0 00-2.46-.015 6.794 6.794 0 00-.167-.07A1.75 1.75 0 008.75 0h-1.5zM7 1.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v.51c0 .33.216.62.532.717.326.1.64.23.936.388a.75.75 0 00.884-.131l.36-.36a.25.25 0 01.354 0l1.06 1.06a.25.25 0 010 .354l-.36.36a.75.75 0 00-.131.884c.158.296.289.61.388.936a.75.75 0 00.718.532h.509a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25h-.51a.75.75 0 00-.717.532c-.1.326-.23.64-.388.936a.75.75 0 00.131.884l.36.36a.25.25 0 010 .354l-1.06 1.06a.25.25 0 01-.354 0l-.36-.36a.75.75 0 00-.884-.131c-.296.158-.61.289-.936.388a.75.75 0 00-.532.718v.509a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-.51a.75.75 0 00-.532-.717c-.326-.1-.64-.23-.936-.388a.75.75 0 00-.884.131l-.36.36a.25.25 0 01-.354 0l-1.06-1.06a.25.25 0 010-.354l.36-.36a.75.75 0 00.131-.884 5.213 5.213 0 01-.388-.936A.75.75 0 002.259 9H1.75a.25.25 0 01-.25-.25v-1.5A.25.25 0 011.75 7h.51a.75.75 0 00.717-.532c.1-.326.23-.64.388-.936a.75.75 0 00-.131-.884l-.36-.36a.25.25 0 010-.354l1.06-1.06a.25.25 0 01.354 0l.36.36a.75.75 0 00.884.131c.296-.158.61-.289.936-.388A.75.75 0 007 2.259V1.75z" />
                </g>
            </svg>
        );
    }
);
