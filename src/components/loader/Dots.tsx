import React, { useState } from 'react';
import '../../styles/loader.css';

export interface DotsProps {
  /**
   * What type is the button
   */
  type?: 'spinner' | 'dots';
  /**
   * What color is the loader?
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const DotsLoad = ({
    type='spinner',
    backgroundColor,
    size='medium'
}: DotsProps) => {
  return (
    <div className={[`circle--wrapper`].join("")}>
        <div className={[`inner-circle`,`inner-circle--${size}`].join(" ")} id='little-one' style={{ backgroundColor }}></div>
        <div className={[`inner-circle`,`inner-circle--${size}`].join(" ")} id='little-two' style={{ backgroundColor }}></div>
        <div className={[`inner-circle`,`inner-circle--${size}`].join(" ")} id='little-three' style={{ backgroundColor }}></div>
    </div>
  );
};
