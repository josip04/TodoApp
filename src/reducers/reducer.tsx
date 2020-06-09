import React from 'react';
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,VisibilityFilters} from '../actions/types';
import {Actions,ITodoAction, IVisibilityFilterAction} from '../types/types';
import {initialState} from '../store/store';
import { combineReducers } from 'redux';


export function todos(
    state = initialState,
    action: Actions
    ):{items:ITodoAction[]}{
    switch(action.type){
        case ADD_TODO:
            return {
                items:[
                ...state.items,
                action.payload
            ]}
        case REMOVE_TODO:
            let items:[] = [];
            state.items.map((item,index)=>{
                if(index!==action.payload.index){
                  items.push(item);
                }
              });
            return {
                items:[
                    ...items
                ]
            }
        case TOGGLE_TODO:
            return {
                items:[
                    ...state.items.map((item:ITodoAction,index)=>{
                        if(index===action.payload.index) return {item:item.item,completed:!item.completed}
                        else return item;
                    }),
                ]
            }
        default:
            return state;
    }
}

function visibilityFilter(
    state = VisibilityFilters.SHOW_ALL,
    action: IVisibilityFilterAction
){
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    todos,
    visibilityFilter
  })


export default rootReducer;