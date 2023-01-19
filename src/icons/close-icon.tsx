interface CloseIconProps {
    closeIconColor?: string;
}

export const CloseIcon = ({closeIconColor='black'}: CloseIconProps) => {
    return (
<svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke={closeIconColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill={closeIconColor}/> </clipPath> </defs> </g>

</svg>
    );
}