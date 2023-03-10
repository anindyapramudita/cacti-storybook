
import React from 'react';
import { Button, ButtonProps } from './Index'
import '../../styles/button.css';


interface ButtonListProps {
  buttons: ButtonProps[];
}

export default function ButtonList({ buttons }:ButtonListProps) {
  return (
    <div className="button-list--wrapper">
      {buttons.map((buttonProp: ButtonProps, id:number) => (
        <div className='button-list--child'>
          <Button color={buttonProp.color} variant={buttonProp.variant} label={buttonProp.label} />
          <p className='button-list--text'>{`button-${buttonProp.variant}--${buttonProp.color}`}</p>
        </div>
      ))}
    </div>
  );
}
