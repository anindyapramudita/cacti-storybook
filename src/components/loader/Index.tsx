import React, { useState } from 'react';
import '../../styles/loader.css';
import { DotsLoad } from './Dots';
import { SpinnerLoad } from './Spinner';
// import { DotsLoad } from './Dots';
// import { SpinnerLoad } from './Spinner';

export interface LoaderProps {
  /**
   * What type is the button
   */
  type?: 'spinner' | 'dots';
  /**
   * If you're using spinner, what do you want the border color to be?
   */
  spinnerColor?: string;
  /**
   * If you're using dots, what color do you want the dots to be?
   */
  DotsColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Loader = ({
    type='spinner',
    size='medium',
    spinnerColor,
    DotsColor,
}: LoaderProps) => {
  return (
    <div>
      {type === 'spinner' ? <SpinnerLoad borderColor={spinnerColor} size={size}/> : <DotsLoad backgroundColor={DotsColor} size={size}/>}
    </div>
  );
};
