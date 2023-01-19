import '../../styles/input.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Label for the input
   */
  label?: string;
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
  startIcon?: JSX.Element;
  /**
   * Is the input disabled?
   */
  isDisabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  children,
  label,
  fullWidth = true,
  error = false,
  errorMessage,
  startIcon,
  isDisabled = false,
  ...props
}: SelectProps) => {
  const width = fullWidth ? '100%' : 'fit-content'
  const inputError = error ? 'input--error' : ''
  const inputStartIcon = startIcon ? 'input--start-icon' : ''
  const inputEndIcon = startIcon ? 'input--end-icon' : ''
  const inputDisabled = isDisabled ? 'input--disabled' : ''

  return (
    <div className='input-wrapper'>
      {label ? <p className={`input-label`}>{label}</p> : null}
      <div className='inside-input-wrapper'>
        <span className='start-icon'>{startIcon}</span>
        <select className={`input-classname ${inputError} ${inputStartIcon} ${inputEndIcon} ${inputDisabled}`} style={{ width }} disabled={isDisabled} >
          {children}
        </select>
      </div>
      {error ? <p className='input-message--error'>{errorMessage}</p> : null}
    </div>
  );
};