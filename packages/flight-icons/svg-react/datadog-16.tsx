import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDatadog16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12.886 10.938l-1.157-.767-.965 1.622-1.122-.33-.988 1.517.05.478 5.374-.996-.313-3.378-.879 1.854zm-5.01-1.456l.861-.12c.14.064.237.088.404.13.26.069.562.134 1.009-.092.104-.052.32-.251.408-.365l3.532-.644.36 4.388L8.4 13.876l-.524-4.394zm6.56-1.581l-.348.067-.67-6.964L2.004 2.336l1.407 11.481 1.335-.195a3.03 3.03 0 00-.556-.576c-.393-.33-.254-.888-.022-1.24.307-.596 1.889-1.354 1.8-2.307-.033-.346-.088-.797-.407-1.106-.012.128.01.252.01.252s-.132-.169-.197-.398c-.065-.088-.116-.117-.185-.234-.05.136-.043.294-.043.294s-.107-.255-.125-.47a.752.752 0 00-.08.279s-.139-.403-.107-.62c-.064-.188-.252-.562-.199-1.412.348.245 1.115.187 1.414-.256.1-.147.167-.548-.05-1.337-.139-.506-.483-1.26-.618-1.546l-.016.012c.071.23.217.713.273.947.17.71.215.958.136 1.285-.068.285-.23.471-.642.68-.412.208-.958-.3-.993-.328-.4-.32-.709-.844-.744-1.098-.035-.278.16-.445.258-.672-.14.04-.298.112-.298.112s.188-.195.419-.364c.095-.063.152-.104.252-.188-.146-.003-.264.002-.264.002s.243-.133.496-.23c-.185-.007-.362 0-.362 0s.544-.245.973-.424c.295-.122.583-.086.745.15.212.308.436.476.909.58.29-.13.379-.197.744-.297.321-.355.573-.401.573-.401s-.125.115-.158.297c.182-.145.382-.265.382-.265s-.078.096-.15.249l.017.025c.213-.129.463-.23.463-.23s-.072.091-.156.209c.16-.002.486.006.612.02.745.017.9-.8 1.185-.902.358-.129.518-.206 1.128.396.523.518.932 1.444.73 1.652-.171.172-.507-.068-.879-.534a2.026 2.026 0 01-.415-.911c-.059-.313-.288-.495-.288-.495s.133.297.133.56c0 .142.018.678.246.979-.022.044-.033.217-.058.25-.265-.323-.836-.554-.929-.622.315.26 1.039.856 1.317 1.428.263.54.108 1.035.24 1.164.039.037.566.698.668 1.03.177.58.01 1.188-.222 1.566l-.647.101c-.094-.026-.158-.04-.243-.09.047-.082.14-.29.14-.333l-.036-.065a2.737 2.737 0 01-.819.726c-.367.21-.79.177-1.065.092-.781-.243-1.52-.774-1.698-.914 0 0-.005.112.028.137.197.223.648.628 1.085.91l-.93.102.44 3.444c-.196.029-.226.042-.44.073-.187-.669-.547-1.105-.94-1.36-.347-.223-.825-.274-1.283-.183l-.03.034c.319-.033.695.014 1.08.26.38.24.685.863.797 1.238.144.479.244.991-.144 1.534-.275.386-1.08.6-1.73.138.174.281.409.51.725.554.469.064.914-.018 1.22-.334.262-.27.4-.836.364-1.432l.414-.06.15 1.069 6.852-.83-.56-5.487zm-4.168-2.905c-.02.044-.05.073-.005.216l.003.008.007.019.02.042c.08.168.17.326.32.406.038-.006.078-.01.12-.013a.546.546 0 01.284.047.607.607 0 00.003-.13c-.01-.212.042-.573-.363-.762-.153-.072-.367-.05-.439.04a.175.175 0 01.034.007c.108.038.035.075.015.12zm1.134 1.978c-.053-.03-.301-.018-.475.003-.333.04-.691.155-.77.217-.143.111-.078.305.027.384.297.223.556.372.83.336.168-.022.317-.29.422-.534.072-.167.072-.348-.034-.406zM8.461 5.259c.093-.09-.467-.207-.902.09-.32.221-.33.693-.024.96.03.027.056.046.08.06a2.75 2.75 0 01.809-.24c.065-.072.14-.2.121-.434-.025-.315-.263-.265-.084-.436z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
