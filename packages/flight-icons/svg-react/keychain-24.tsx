import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconKeychain24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M20.483 2.485a1.295 1.295 0 00-1.595.188l-.582.581c.787.228 1.514.6 2.147 1.086l.24-.255a1.04 1.04 0 00-.21-1.6zm-1.067 2.953A5 5 0 0011.5 9.5c0 .448.089.865.226 1.312.068.221.145.442.229.682l.005.016c.085.241.175.5.258.772a.75.75 0 01-.188.748l-5.78 5.78v1.69h1.94l.56-.56V18.5a.75.75 0 01.75-.75h1.25V16.5a.75.75 0 01.75-.75h1.69l1.28-1.28a.75.75 0 01.711-.198c.465.116.946.228 1.319.228a5 5 0 005-5 .75.75 0 011.5 0 6.5 6.5 0 01-6.5 6.5c-.422 0-.883-.085-1.267-.172L14.03 17.03a.75.75 0 01-.53.22h-1.25v1.25a.75.75 0 01-.75.75h-1.25v1a.75.75 0 01-.22.53l-1 1a.75.75 0 01-.53.22H1.75a.75.75 0 01-.75-.75v-2.79a.75.75 0 01.218-.529l5.168-5.193a6.887 6.887 0 01-.636-2.901C5.75 6.07 8.762 3 12.5 3h3.941l.029-.03 1.357-1.358a2.795 2.795 0 013.442-.404 2.54 2.54 0 01.515 3.907l-2.727 2.888a2.75 2.75 0 11-1.129-.988.7.7 0 01.027-.03l1.461-1.547zm-7.072-.936c-2.818.084-5.094 2.43-5.094 5.335 0 .975.257 1.887.704 2.672a.75.75 0 01-.12.9L2.5 18.77V20.5h2.25v-2a.75.75 0 01.22-.53l5.675-5.675a45.553 45.553 0 00-.1-.29l-.01-.027c-.08-.232-.166-.477-.243-.726-.16-.523-.292-1.098-.292-1.752 0-2.01.912-3.805 2.344-4.998zM16.75 8.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
