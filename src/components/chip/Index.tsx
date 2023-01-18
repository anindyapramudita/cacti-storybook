import { CloseIcon } from '../../icons/close-icon';
import '../../styles/chip.css';

export interface ChipProps {
    /**
     * What type is your chip?
     */
    type?: "filled" | "outlined";
    /**
     * Button contents
     */
    label: string;
    /**
     * Is it currently loading?
     */
    isActive?: boolean;
    /**
     * Is there an icon before the text?
     */
    startIcon?: JSX.Element;
    /**
     * Is there an icon before the text?
     */
    closable?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional to close chip if necessary
     */
    onCloseChip?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Chip = ({
    type='filled',
    isActive = false,
    startIcon,
    closable,
    label,
    ...props
}: ChipProps) => {
    const active = isActive ? 'chip-wrapper--active' : 'chip-wrapper--inactive'
    const closeIconColor = type === 'filled' ? 'white' : '#2F2E41'

    return (
        <div className={`chip-wrapper ${active} chip-wrapper--${type}`} onClick={props.onClick}>
            {startIcon ? startIcon : null}
            <div className='chip-text-wrapper'>
                <p className='chip-text'>{label}</p>
            </div>
            {closable ? <div className='end-icon' onClick={props.onCloseChip}><CloseIcon closeIconColor='white' /></div> : null}
        </div>
    );
};
