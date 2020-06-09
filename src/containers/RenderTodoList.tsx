import {toggleTodo,removeTodo} from '../actions/action';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { IState , ITodoAction} from '../types/types';
import { Dispatch } from 'redux';


interface IRootReducer {
    todos: IState,
    visibilityFilter: string
}


interface IMapDispatch{
    onToggle: (index:number) => void
    onClick: (index:number) => void
}

const getVisibleTodos  = ({items}:IState,filter:string):IState =>{
    switch (filter) {
        case 'SHOW_ALL':
            return {items}
        case 'SHOW_ACTIVE':
            return {items:Object.assign(items.filter((item:ITodoAction)=> !item.completed))};
        case 'SHOW_COMPLETED':
            return {items:Object.assign(items.filter((item:ITodoAction)=> item.completed))};
        default:
            return {items}
        }
}





const mapStateToProps = ({todos,visibilityFilter}:IRootReducer):IState => {
    const {items}:IState = getVisibleTodos(todos,visibilityFilter); 
    return {items};
}

const mapDispatchToProps = (dispatch:Dispatch):IMapDispatch => {
    return {
        onClick: ((index:number) => dispatch(removeTodo({index}))),
        onToggle: (index:number) => dispatch(toggleTodo({index}))
    }
}


const RenderTodoList = connect<IState,IMapDispatch,any,any>(mapStateToProps,mapDispatchToProps)(TodoList)

export default RenderTodoList;