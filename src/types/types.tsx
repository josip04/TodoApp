import {VisibilityFilters,SET_VISIBILITY_FILTER} from '../actions/types';


export interface IVisibilityFilterAction{
    type: typeof SET_VISIBILITY_FILTER,
    filter: typeof VisibilityFilters
}


//store items:[]:IState
export interface IState{
    items: []
}
export interface IVisibilityItems{
    visibilityFilter:string
}

//action creator types
export interface ITodoAction{
    item:string,
    completed:boolean
}
export interface IToggleActionIndex{
    index:number
}


//TodoItem.tsx , TodoList.tsx
export interface ITodoItem{
    item:string,
    completed:boolean,
    index:number
}


export interface TypedAction<TAction, TPayload> {
    type: TAction;
    payload: TPayload;
}

type AddTodo = TypedAction<'ADD_TODO',ITodoAction>;
type RemoveTodo = TypedAction<'REMOVE_TODO',IToggleActionIndex>;
type ToggleTodo = TypedAction<'TOGGLE_TODO',IToggleActionIndex>;

export type Actions = AddTodo | ToggleTodo | RemoveTodo;

