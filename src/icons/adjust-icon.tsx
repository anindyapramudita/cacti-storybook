interface AdjustIconProps {
    adjustIconColor?: string;
}

export const AdjustIcon = ({adjustIconColor = '#000000'}: AdjustIconProps) => {
    return (
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <path d="M16 2L16 13M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19M16 13C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19M16 19L16 22M8 22L8 11M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5M8 5L8 2" stroke={adjustIconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

        </svg>
    );
}