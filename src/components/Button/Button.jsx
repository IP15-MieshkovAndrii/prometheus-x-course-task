import * as React from 'react';
import './Button.scss';
import {memo} from "react";

const UniqueButton  = ({children, id, className, ref, onClick, disabled, type}) => {
    return (
        <button ref={ref} disabled={disabled} id={id} className={'my-button ' + className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export const Button = memo(UniqueButton);