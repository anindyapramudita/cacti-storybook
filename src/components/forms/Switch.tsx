import '../../styles/switch.css';

export interface SwitchProps {
    withIcon?: boolean;
    isDisabled?: boolean;
    variant?: "pill" | "slider"
}

/**
 * Primary UI component for user interaction
 */
export const Switch = ({
    variant='pill',
    withIcon=false,
    isDisabled=false,
    ...props
}: SwitchProps) => {
    const iconOnToggle = withIcon ? `toggle-icon toggle-icon--${variant}` : ''

    return (
        <div className='toggle-wrapper'>
            <input type="checkbox" id="check" className={`toggle toggle-${variant} ${iconOnToggle}`} disabled={isDisabled}/>
            <label htmlFor="check"></label>
        </div>
    );
};
