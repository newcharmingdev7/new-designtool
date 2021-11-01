import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVmwareColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#696566"
                    d="M4.096 8.468c-.251-.57-.873-.829-1.453-.562-.58.267-.795.934-.532 1.505l2.436 5.48c.383.859.787 1.31 1.545 1.31.81 0 1.163-.491 1.545-1.31l2.147-4.838a.309.309 0 01.306-.204.345.345 0 01.336.355v4.682c0 .722.387 1.314 1.131 1.314s1.146-.592 1.146-1.314v-3.831c0-.74.512-1.219 1.21-1.219.697 0 1.16.497 1.16 1.219v3.831c0 .722.389 1.314 1.132 1.314.743 0 1.147-.592 1.147-1.314v-3.831c0-.74.51-1.219 1.208-1.219.696 0 1.162.497 1.162 1.219v3.831c0 .722.388 1.314 1.131 1.314.744 0 1.147-.592 1.147-1.314v-4.36C22 8.922 20.755 7.8 19.256 7.8c-1.497 0-2.434 1.072-2.434 1.072-.498-.669-1.185-1.07-2.347-1.07-1.227 0-2.3 1.07-2.3 1.07-.499-.669-1.348-1.07-2.05-1.07-1.087 0-1.95.494-2.477 1.74l-1.556 3.795-1.996-4.869z"
                />
            </svg>
        );
    }
);
