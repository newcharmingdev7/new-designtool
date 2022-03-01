import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGoogleColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#4285F4"
                    d="M21.804 12.23c0-.68-.055-1.363-.173-2.032H12.2v3.85h5.4a4.63 4.63 0 01-1.998 3.04v2.498h3.222c1.893-1.742 2.98-4.314 2.98-7.356z"
                />
                <path
                    fill="#34A853"
                    d="M12.2 22c2.697 0 4.971-.886 6.628-2.414l-3.222-2.499c-.897.61-2.054.956-3.402.956-2.61 0-4.821-1.76-5.615-4.127H3.264v2.576A10 10 0 0012.2 22z"
                />
                <path
                    fill="#FBBC04"
                    d="M6.585 13.916a5.99 5.99 0 010-3.828V7.512H3.264a10.008 10.008 0 000 8.98l3.321-2.576z"
                />
                <path
                    fill="#EA4335"
                    d="M12.2 5.958a5.434 5.434 0 013.836 1.499l2.855-2.855A9.61 9.61 0 0012.2 2.001a9.998 9.998 0 00-8.936 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13z"
                />
            </svg>
        );
    }
);
