import React, { useState } from 'react';
import '../../styles/loader.css';

export interface LoaderProps {
  /**
   * What type is the button
   */
  type?: 'spinner' | 'dots';
  /**
   * If you're using spinner, what do you want the border color to be?
   */
  borderColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const SpinnerLoad = ({
    type='spinner',
    borderColor,
    ...props
}: LoaderProps) => {
  return (
    <div className={[`spinner--wrapper`].join("")} style={{ borderColor }}>
        <div className={[`spinner--outer`].join("")}>
        <div className={[`spinner--inner`].join("")} style={{ borderColor }}></div>
        </div>
    </div>
  );
};
