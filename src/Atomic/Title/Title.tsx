import React from "react";
import './title.css'

interface TitleProps{
    size?: 'large' | 'medium' | 'small';
    color?:string;
};

export const Title=({
    size='small',
    color,
    ...props
}:TitleProps)=>{
    return(
        <div className={['title',`${size}`].join(' ')} style={{color}} {...props}></div>
    )
}
