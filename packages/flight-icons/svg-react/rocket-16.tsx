import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconRocket16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                <g fill={color}>
                    <path d="M9.78 7.28a.75.75 0 00-1.06-1.06l-.5.5a.75.75 0 001.06 1.06l.5-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M12.627 1.32a1.731 1.731 0 012.054 2.053c-.27 1.28-.686 3.19-1.103 4.859a3.625 3.625 0 01-.58 1.224c.002.015.002.03.002.044v2.441a1.75 1.75 0 01-.833 1.49l-2.021 1.244a1.75 1.75 0 01-2.284-.397l-1.27-1.587a2.028 2.028 0 01-1.08-.917 3.426 3.426 0 00-.542-.744 3.428 3.428 0 00-.744-.542c-.4-.223-.755-.61-.917-1.08l-1.587-1.27a1.75 1.75 0 01-.398-2.284l1.244-2.021A1.75 1.75 0 014.058 3H6.5l.044.001c.37-.263.777-.467 1.224-.579 1.669-.417 3.58-.833 4.859-1.103zm-5.43 9.956a.754.754 0 00-.167-.025.517.517 0 01-.209-.208 4.913 4.913 0 00-.79-1.073 4.913 4.913 0 00-1.074-.791.516.516 0 01-.208-.21.754.754 0 00-.025-.166l.002-.008c.255-.78.694-1.941 1.307-2.958.634-1.05 1.353-1.773 2.099-1.96 1.641-.41 3.53-.821 4.804-1.09a.231.231 0 01.277.277c-.269 1.274-.68 3.163-1.09 4.804-.187.746-.91 1.465-1.96 2.099-1.017.613-2.177 1.052-2.958 1.307a.173.173 0 01-.008.002zm1.139 1.193l.697.872a.25.25 0 00.327.057l2.021-1.244a.25.25 0 00.119-.213v-1.056c-.186.13-.375.252-.562.366-.88.53-1.832.936-2.602 1.218zM2.659 6.967l.872.697c.282-.77.687-1.722 1.218-2.602.113-.187.235-.376.366-.562H4.059a.25.25 0 00-.213.119L2.602 6.64a.25.25 0 00.057.327z"
                        clipRule="evenodd"
                    />
                    <path d="M4.442 11.558a.625.625 0 010 .884l-2 2a.625.625 0 11-.884-.884l2-2a.625.625 0 01.884 0zM2.692 10.308a.625.625 0 010 .884l-.75.75a.625.625 0 11-.884-.884l.75-.75a.625.625 0 01.884 0zM5.692 14.192a.625.625 0 10-.884-.884l-.75.75a.625.625 0 10.884.884l.75-.75z" />
                </g>
            </svg>
        );
    }
);
