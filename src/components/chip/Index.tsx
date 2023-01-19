import { CloseIcon } from '../../icons/close-icon';
import { CloseFilledIcon } from '../../icons/close-filled-icon';
import '../../styles/chip.css';
import { useMemo } from 'react';

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
    /**
     * If you want to customize the color of your chip
     */
    backgroundColor?: string;
    /**
     * Is the chip disabled?
     */
    disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Chip = ({
    type = 'filled',
    isActive = false,
    startIcon,
    closable,
    label,
    backgroundColor,
    disabled,
    ...props
}: ChipProps) => {
    const borderActive = isActive && !disabled ? 'chip-border--active' : ''
    const active = isActive && !disabled ? 'chip-wrapper--active' : 'chip-wrapper--inactive'
    const initialCloseColor = type === 'filled' ? 'white' : !disabled ? 'grey' : 'white'
    const chipDisabled = disabled ? 'chip-wrapper--disabled' : 'chip-wrapper--enabled'
    const chipWrapperType = !disabled ? `chip-wrapper--${type}` : ''
    const closeIconDisabled = !disabled ? `end-icon--enabled` : `end-icon--disabled`
    // const closeIconDisabled = !disabled ? `end-icon end-icon--enabled` : `end-icon`
    // className={!disabled ? `end-icon end-icon--enabled` : `end-icon end-icon--disabled`}

    return (
        <div className={`chip-border ${borderActive}`}>
            <div className={`chip-wrapper ${chipDisabled} ${active} ${chipWrapperType}`} onClick={props.onClick} style={{ backgroundColor }}>
                {startIcon ? startIcon : null}
                <div className='chip-text-wrapper'>
                    <p className='chip-text'>{label}</p>
                </div>
                {closable ? <div className={closeIconDisabled} onClick={props.onCloseChip}>
                    {type === 'filled' ? <CloseFilledIcon closeIconColor={initialCloseColor} /> : <CloseIcon closeIconColor={initialCloseColor} />}
                </div> : null}
            </div>
        </div>
    );
};
