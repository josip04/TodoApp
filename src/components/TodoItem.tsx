import React from 'react';
import {ITodoItem} from '../types/types';

interface IProp{
    key:number,
    item:ITodoItem,
    onClick: () => void,
    onToggle: () => void 
}

const TodoItem = (props:IProp) => {
    const {item} = props;
    return (
        <div>
            <div>
                <p>
                    {item.index+1}.
                    <span
                    onClick={props.onToggle}
                    style={{
                        textDecoration: item.completed ? 'line-through' : 'none'
                    }}>
                        {item.item}
                    </span>
                <button style={{marginLeft:'1rem'}}  onClick={props.onClick}>X</button>
                </p>
            </div>
            

        </div>
    )
}

export default TodoItem;