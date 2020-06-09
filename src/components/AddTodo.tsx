import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/action';

interface IAddTodo{
    addTodo:({}) => void
}

const AddTodo = (props:IAddTodo) => {
    let input:HTMLInputElement | null;
    
    return(
        <div>
        <form onSubmit={
            (e:React.FormEvent<HTMLFormElement>) => {        
                e.preventDefault();
                if(input?.value.length){
                    props.addTodo({item:input.value,completed:false});
                    input.value = '';
                }
            }
            }>
            <input type="text" ref={node => {
                input = node
            }} 
            id="textInput"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        addTodo: ({item,completed}:any) => dispatch(addTodo({item,completed}))
    }
}

//export default connect(null,mapDispatchToProps)(AddTodo);
export default connect(null,mapDispatchToProps)(AddTodo);