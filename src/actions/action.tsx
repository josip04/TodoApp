//import React from 'react';
import {ADD_TODO,REMOVE_TODO,VisibilityFilters,SET_VISIBILITY_FILTER} from './types';
import {ITodoAction,IToggleActionIndex} from '../types/types'


export function addTodo(payload:ITodoAction){
    return {
        type:ADD_TODO,
        payload
    }
}

export function removeTodo(payload:IToggleActionIndex){
    return {
        type:REMOVE_TODO,
        payload
    }
}

export function toggleTodo(payload:IToggleActionIndex){
    return{
        type:'TOGGLE_TODO',
        payload
    }
}

export function setVisibilityFilter(filter:string){
    return{
        type: SET_VISIBILITY_FILTER,
        filter
    }
}