interface ProfileIconProps {
    profileIconColor?: string;
    width?:string;
    height?:string;
}

export const ProfileIcon = ({ profileIconColor = 'black', width='16px', height='16px' }: ProfileIconProps) => {
    return (
        <svg fill={profileIconColor} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">

                <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z" />

            </g>

        </svg>
    );
}