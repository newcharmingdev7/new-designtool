import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconF524 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M20.253 6.354c-.123.506-.187 1.031-.305 1.568a56.737 56.737 0 00-5.24-.406c-.16.502-.31.993-.482 1.53 3.311.204 4.92 1.076 5.875 2.104.928 1.04 1.125 2.19 1.071 3.256-.12 1.734-.884 2.83-1.933 3.642-1.061.8-2.345 1.197-3.373 1.283-1.515.114-3.542-.247-3.973-.511-.26-.59-.516-1.186-.791-1.835-.067-.138-.11-.28.08-.445.295-.282.578-.556.877-.845.132-.13.278-.25.389-.065.407.629.79 1.206 1.172 1.78.434.641 1.096 1.226 2.543 1.128 1.215-.108 2.14-1.028 2.238-2.04.107-1.872-1.788-3.2-6.713-3.625.945-2.853 1.867-5.614 2.603-7.809 1.17.054 2.253.15 3.288.283.765.097 1.476.276 2.19.358A9.978 9.978 0 0011.998 2C6.477 2 2 6.477 2 12a9.953 9.953 0 001.947 5.926c.423.003.717-.091.749-.274.039-.191.006-.487-.027-.785-.2-1.962-.271-4.081-.196-6.204-.507.022-.962.045-1.399.07.018-.392.04-.764.07-1.152.432-.041.888-.077 1.39-.12.021-.338.046-.665.075-.996.225-2.025 2.357-3.263 4.134-3.741.788-.192 1.27-.253 1.648-.273.137-.004.284-.01.431-.01.368 0 .742.035.979.196.383.287.761.573 1.164.89.04.055.084.14-.016.287-.185.217-.363.423-.551.646-.108.131-.288.096-.44.055a46.47 46.47 0 00-.93-.46c-.56-.25-1.14-.506-1.785-.48-.403.032-.793.444-.833 1.007a84.509 84.509 0 00-.125 2.69 142.94 142.94 0 013.412-.057l-.001.788c-.384.171-.746.345-1.131.52-.794.009-1.55.015-2.31.028-.036 2.266-.002 4.523.1 6.61.02.315.035.634.125.848.109.269.733.476 2.092.553.005.236.012.46.02.689-2.212-.065-4.337-.276-6.04-.583A9.968 9.968 0 0012 22c5.524 0 10-4.477 10-10a9.952 9.952 0 00-1.746-5.646z"
                />
            </svg>
        );
    }
);
