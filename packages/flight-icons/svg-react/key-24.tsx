import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconKey24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M13.88 5.877A2.978 2.978 0 0116.001 5a2.999 2.999 0 11-2.772 4.148v-.002a2.992 2.992 0 01.651-3.27zm1.06 1.06a1.479 1.479 0 011.062-.437 1.499 1.499 0 11-1.387 2.072 1.492 1.492 0 01.324-1.633l.002-.001z" />
                    <path d="M14.307 1.068c.34-.047.684-.068 1.021-.068 2.049 0 3.98.799 5.429 2.247a7.72 7.72 0 012.176 6.444v.001a7.725 7.725 0 01-3.8 5.642 7.697 7.697 0 01-3.811 1.012 7.653 7.653 0 01-2.553-.437l-1.04 1.04c-.225.236-.54.37-.863.37H9.6v1.089c-.008.35-.146.675-.383.926l-.007.007a1.356 1.356 0 01-.97.408H7.155v1.22c.011.323-.11.63-.331.867l-.011.012-.007.006-.926.926a.75.75 0 01-.53.22H1.75a.75.75 0 01-.75-.75v-3.616a.75.75 0 01.22-.53l6.869-6.868a7.719 7.719 0 01.572-6.369 7.72 7.72 0 015.646-3.799zm.203 1.486c.267-.037.543-.054.818-.054 1.651 0 3.2.641 4.368 1.807a6.22 6.22 0 011.75 5.185 6.225 6.225 0 01-3.057 4.54 6.173 6.173 0 01-5.464.33.833.833 0 00-.904.175l-1.282 1.281H9.135c-.578 0-1.034.47-1.034 1.034v1.397H6.69c-.578 0-1.035.47-1.035 1.034v1.6l-.616.617H2.5v-2.555l6.955-6.954a.831.831 0 00.18-.915 6.217 6.217 0 01.328-5.464 6.22 6.22 0 014.544-3.057h.003z" />
                </g>
            </svg>
        );
    }
);
