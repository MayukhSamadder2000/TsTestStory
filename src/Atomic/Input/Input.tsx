import React from "react";
import './input.css'

interface InputProps{
    size?:'small' | 'medium' | 'large' ;
}

export const Input=({
    size="small",
    ...props
}:InputProps)=>{
    return(
        <input type="text" className={['input',`${size}`].join(' ')} {...props} />
    )
}

