import '../../styles/button.css';
import { DotsLoad } from '../loader/Dots';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * What type is the button
   */
  type?: 'filled' | 'reverse' | 'outline';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Is it currently loading?
   */
  isLoading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is it full width?
   */
  fullWidth?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  type = 'filled',
  fullWidth=false,
  backgroundColor,
  isLoading=false,
  label,
  ...props
}: ButtonProps) => {
  const mode = isLoading ? '' :['button-', `${type}`, `--${variant}`].join("")
  const buttonWidth = fullWidth ? 'button--fullwidth' : ''
  const load = isLoading ? `button--load button-${type}--load` : `button button--${type}`
  const loaderIcon = isLoading ? `loader--active` : ''
  const loaderColor = type === 'filled' ? 'white' : 'lightgray'

  return (
    <button
      type="button"
      className={[`button--${size}`, load, mode, buttonWidth].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <p className={isLoading ? 'text--load' : ''}>{label}</p>
      <div className={loaderIcon}>{isLoading && <DotsLoad backgroundColor={loaderColor} size='mini'/>}</div>
    </button>
  );
};
