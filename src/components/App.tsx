import React from 'react';
import Header from './Header';
import RenderTodoList from '../containers/RenderTodoList';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Header />
        <RenderTodoList />
      </div>
    )
  }
  
}


export default App;
