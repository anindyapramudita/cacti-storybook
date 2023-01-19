import '../../styles/input.css';

export interface OptionProps
extends React.OptionHTMLAttributes<HTMLOptionElement> {
  /**
   * Label for option
   */
  label?: string;
  /**
   * Value of the option
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Option = ({
  children,
  value,
  ...props
}: OptionProps) => {
  return (
    <option value={value}>{children}</option>
  );
};
