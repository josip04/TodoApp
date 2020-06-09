import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import {ITodoItem,ITodoAction} from '../types/types';

interface IProps{
    items:ITodoItem[],
    onToggle: (index:number) => void
    onClick: (index:number) => void
}


const TodoList = (props:IProps) => {//{items}:IState
    //console.log(props.items);
    const items = props.items.map(({item,completed}:ITodoAction,index:number)=>{
        const todoItem:ITodoItem = {item:item,completed:completed,index:index};
        return <TodoItem key={index} item={todoItem} onToggle={()=>{props.onToggle(index)}} onClick={()=>{props.onClick(index)}}/>
    });
    //}
    return(
        <div>
            <p>TodoList</p>
            {items}
            <AddTodo />
        </div>
    )
}


export default TodoList;