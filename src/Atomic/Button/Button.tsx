import React from 'react'
import './button.css'

interface BtnProps{
    bgColor?: 'red' | 'blue' | 'gradient';
    text?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Button=({
    bgColor='red',
    text="primary",
    size="small",
    ...props
}:BtnProps)=>{
    return(
        <div className={['button',`${size}`,`${bgColor}`].join(' ')}
        {...props}>
            {text}
        </div>
    )
}