import '../../styles/button.css';
import { DotsLoad } from '../loader/Dots';

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * What type is the button
   */
  variant?: 'filled' | 'reverse' | 'outline';
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
  color = 'primary',
  size = 'medium',
  variant = 'filled',
  fullWidth=false,
  backgroundColor,
  isLoading=false,
  label,
  ...props
}: ButtonProps) => {
  const mode = isLoading ? '' :['button-', `${variant}`, `--${color}`].join("")
  const buttonWidth = fullWidth ? 'button--fullwidth' : ''
  const load = isLoading ? `button--load button-${variant}--load` : `button button--${variant}`
  const loaderIcon = isLoading ? `loader--active` : ''
  const loaderColor = variant === 'filled' ? 'white' : 'lightgray'

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
