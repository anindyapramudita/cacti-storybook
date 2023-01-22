import '../../styles/switch.css';

export interface SwitchProps {
    withIcon?: boolean;
    disabled?: boolean;
    variant?: "pill" | "slider"
}

/**
 * Primary UI component for user interaction
 */
export const Switch = ({
    variant='pill',
    withIcon=false,
    disabled=false,
    ...props
}: SwitchProps) => {
    const iconOnToggle = withIcon ? `toggle-icon toggle-icon--${variant}` : ''

    return (
        <div className='toggle-wrapper'>
            <input type="checkbox" id="check" className={`toggle toggle-${variant} ${iconOnToggle}`} disabled={disabled}/>
            <label htmlFor="check"></label>
        </div>
    );
};
