import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconF5Color16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#E4002B"
                    d="M13.777 4.048c-.086.354-.13.722-.213 1.098a39.715 39.715 0 00-3.668-.285c-.112.351-.217.696-.337 1.071 2.318.143 3.444.754 4.112 1.473.65.728.788 1.533.75 2.28-.084 1.213-.619 1.98-1.353 2.549a4.712 4.712 0 01-2.361.898c-1.061.08-2.48-.173-2.782-.358-.182-.414-.36-.83-.553-1.285-.047-.096-.077-.196.056-.31.206-.199.405-.39.613-.593.093-.09.195-.174.273-.045.285.44.552.844.82 1.246.304.449.768.858 1.78.79.851-.076 1.498-.72 1.567-1.428.075-1.31-1.251-2.24-4.699-2.538.662-1.997 1.306-3.93 1.822-5.466a27.93 27.93 0 012.302.198c.535.068 1.033.193 1.532.25a7 7 0 00-11.076 8.555c.297.002.502-.064.525-.192.027-.133.004-.34-.02-.549a32.121 32.121 0 01-.136-4.343c-.355.015-.674.031-.98.05.013-.276.028-.536.05-.807.302-.029.621-.054.972-.084.015-.237.032-.466.053-.697.157-1.418 1.65-2.285 2.893-2.62.552-.134.89-.176 1.154-.19.096-.003.2-.007.302-.007.258 0 .52.024.685.137.268.2.533.4.815.623.028.038.059.098-.011.201l-.386.452c-.076.092-.201.067-.307.039a32.529 32.529 0 00-.652-.323c-.392-.174-.798-.354-1.25-.336-.281.023-.554.311-.582.706-.04.6-.066 1.215-.088 1.882a100.06 100.06 0 012.389-.04l-.001.552c-.27.12-.523.241-.792.364-.556.006-1.085.01-1.617.02a72.993 72.993 0 00.07 4.627c.014.22.024.444.088.593.076.189.513.334 1.464.387l.014.483c-1.549-.046-3.036-.194-4.228-.408a7 7 0 0010.991-8.62z"
                />
                <path
                    fill="#fff"
                    d="M14.42 9.684c.038-.746-.1-1.55-.75-2.279-.667-.72-1.794-1.33-4.112-1.473.12-.375.226-.72.337-1.071 1.386.049 2.62.149 3.668.285.083-.376.128-.744.214-1.098a6.934 6.934 0 00-.339-.454c-.499-.058-.996-.182-1.532-.251a27.93 27.93 0 00-2.301-.198c-.516 1.536-1.16 3.469-1.822 5.467 3.447.298 4.773 1.227 4.699 2.538-.069.708-.716 1.352-1.567 1.428-1.013.068-1.476-.34-1.78-.79-.268-.402-.535-.806-.82-1.246-.078-.129-.18-.045-.273.045-.209.203-.407.395-.614.592-.132.116-.103.215-.056.312.193.454.373.87.554 1.284.302.185 1.72.438 2.782.358a4.714 4.714 0 002.36-.898c.735-.57 1.27-1.337 1.353-2.55z"
                />
                <path
                    fill="#fff"
                    d="M2.363 12.148c.132.18.273.354.422.52 1.193.215 2.68.363 4.23.408-.006-.16-.01-.317-.015-.483-.951-.053-1.388-.198-1.464-.386-.064-.15-.075-.373-.088-.594a72.784 72.784 0 01-.07-4.627c.532-.01 1.061-.014 1.617-.02.27-.123.523-.244.792-.364v-.551c-.823.003-1.604.017-2.387.039.022-.667.048-1.282.087-1.883.028-.394.301-.683.583-.705.451-.018.857.162 1.25.336.216.105.43.209.651.323.106.028.232.052.307-.04l.386-.451c.07-.104.04-.163.011-.201a39.675 39.675 0 00-.815-.624c-.165-.112-.427-.136-.685-.136-.102 0-.206.004-.301.007-.265.014-.602.056-1.154.19-1.244.335-2.736 1.202-2.894 2.62-.02.231-.037.46-.052.697-.351.03-.671.055-.973.084-.022.271-.037.532-.05.806.306-.018.625-.033.98-.049a32.19 32.19 0 00.137 4.343c.023.209.046.416.019.55-.022.127-.228.193-.524.191z"
                />
            </svg>
        );
    }
);
