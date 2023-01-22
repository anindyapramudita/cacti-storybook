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
  startIcon,
  closable = true,
  label,
  backgroundColor,
  disabled,
  ...props
}: ChipProps) => {
  const initialCloseColor = type === 'filled' ? 'white' : !disabled ? 'grey' : 'white'

  return (
    <div className='chip-wrapper'>
      <input type="checkbox" id="close" className='close-icon' disabled={!closable || disabled} />
      <div>
        <input type="checkbox" id="check" className={`chip chip-${type}`} disabled={disabled} />
        <label htmlFor='check' style={{backgroundColor}}>
          <div>{startIcon}</div>
          <div className='label'>{label}</div>
            {closable ? <div onClick={props.onCloseChip} className={(!closable || disabled) ? '' : 'close-icon-button'}>
              <label htmlFor='close' className={(!closable || disabled) ? '' : 'close-icon-button'}>
                {type === 'filled' ? <CloseFilledIcon closeIconColor={initialCloseColor} /> : <CloseIcon closeIconColor={initialCloseColor} />}
              </label>
            </div> : null}
        </label>
      </div>
    </div>
  );
};
