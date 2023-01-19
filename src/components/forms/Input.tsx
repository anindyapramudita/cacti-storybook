import '../../styles/input.css';

export interface InputProps {
    /**
     * Label for the input
     */
    label?: string;
    /**
     * Button contents
     */
    placeholder?: string;
    /**
     * Is it fullwidth?
     */
    fullWidth?: boolean;
    /**
     * Is there an error in the input?
     */
    error?: boolean;
    /**
     *  What is the error message?
     */
    errorMessage?: string;
    /**
     * What type is the input?
     */
    type?: string;
    /**
     * Is there a start icon?
     */
    startIcon?: JSX.Element;
    /**
     * Is there an end icon?
     */
    endIcon?: JSX.Element;
    /**
     * Optional function for the end icon
     */
    endIconClick?: ()=>void
    /**
     * Is the input disabled?
     */
    isDisabled: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
    label,
    placeholder,
    fullWidth = true,
    error = false,
    errorMessage,
    startIcon,
    endIcon,
    type = 'text',
    isDisabled=false,
    endIconClick,
    ...props
}: InputProps) => {
    const width = fullWidth ? '100%' : 'fit-content'
    const inputError = error ? 'input--error' : ''
    const inputStartIcon = startIcon ? 'input--start-icon' : ''
    const inputEndIcon = startIcon ? 'input--end-icon' : ''
    const endIconClickable = endIconClick ? 'end-icon--clickable' : ''
    const inputDisabled = isDisabled ? 'input--disabled' : ''

    return (
        <div className='input-wrapper'>
            {label ? <p className={`input-label`}>{label}</p> : null}
            <div className='inside-input-wrapper'>
                <span className='start-icon'>{startIcon}</span>
                <input
                    className={`input-classname ${inputError} ${inputStartIcon} ${inputEndIcon} ${inputDisabled}`}
                    placeholder={placeholder ? placeholder : ''}
                    style={{ width }}
                    type={type}
                    disabled={isDisabled}
                />
                <span className={`end-icon ${endIconClickable}`} onClick={endIconClick}>{endIcon}</span>
            </div>
            {error ? <p className='input-message--error'>{errorMessage}</p> : null}
        </div>
    );
};
