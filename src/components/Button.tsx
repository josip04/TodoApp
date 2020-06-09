import React from 'react';

interface IProps{
    children:string,
    onClick:() => void
}


const FilterButton = (props:IProps) =>{

    return (
        <button
        onClick={props.onClick}
        >
         {props.children}
        </button>
    )
}

export default FilterButton;