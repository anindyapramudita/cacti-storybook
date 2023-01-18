interface CloseIconProps {
    closeIconColor?: string;
}

export const CloseIcon = ({ closeIconColor = '#000000' }: CloseIconProps) => {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="close"> <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25L16.75 1.25C20.0637 1.25 22.75 3.93629 22.75 7.25L22.75 16.75C22.75 20.0637 20.0637 22.75 16.75 22.75L7.25 22.75C3.93629 22.75 1.25 20.0637 1.25 16.75L1.25 7.25ZM7.18298 7.18298C7.42696 6.939 7.82253 6.939 8.06651 7.18298L12 11.1165L15.9335 7.18298C16.1775 6.939 16.573 6.93901 16.817 7.18299C17.061 7.42697 17.061 7.82254 16.817 8.06652L12.8835 12L16.817 15.9335C17.061 16.1775 17.061 16.573 16.817 16.817C16.573 17.061 16.1775 17.061 15.9335 16.817L12 12.8835L8.0665 16.817C7.82252 17.061 7.42695 17.061 7.18298 16.817C6.939 16.573 6.93901 16.1775 7.18299 15.9335L11.1165 12L7.18298 8.06651C6.93901 7.82253 6.93901 7.42696 7.18298 7.18298Z" fill={closeIconColor} /> </g> </g> </g>

        </svg>
    );
}