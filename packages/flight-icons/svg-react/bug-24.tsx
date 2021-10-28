import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBug24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    fill={color}
                    fillRule="evenodd"
                    d="M15.72 1.22a.75.75 0 111.06 1.06l-1.176 1.177a4.597 4.597 0 011.293 4.256c.612.071 1.008.147 1.258.208.54.133.845.61.845 1.089v1.408l2.987-1.12a.75.75 0 01.526 1.404L19 12.02v2.318l3.343.418a.75.75 0 11-.186 1.488L19 15.85v.4c0 .931-.195 1.816-.545 2.62l3.808 1.428a.75.75 0 01-.526 1.404l-4-1.5a.754.754 0 01-.046-.019C16.415 21.894 14.332 23 12 23s-4.415-1.106-5.69-2.817a.775.775 0 01-.047.02l-4 1.5a.75.75 0 11-.526-1.405l3.808-1.429A6.523 6.523 0 015 16.25v-.4l-3.157.394a.75.75 0 01-.186-1.488L5 14.338V12.02l-3.513-1.318a.75.75 0 01.526-1.404L5 10.418V9.01c0-.479.305-.956.845-1.089.25-.06.646-.137 1.258-.208a4.597 4.597 0 011.293-4.256L7.22 2.28a.75.75 0 011.06-1.06L9.63 2.568A5.196 5.196 0 0112 2c.852 0 1.661.205 2.371.568L15.72 1.22zM8.617 7.586A58.06 58.06 0 0112 7.5c1.4 0 2.508.035 3.383.086.076-.266.117-.547.117-.836 0-1.753-1.524-3.25-3.5-3.25S8.5 4.997 8.5 6.75c0 .29.04.57.117.836zM6.5 11.485v-2.17C7.198 9.188 8.772 9 12 9s4.802.187 5.5.316v6.934c0 2.87-2.433 5.25-5.5 5.25s-5.5-2.38-5.5-5.25v-1.234-3.5-.031z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
