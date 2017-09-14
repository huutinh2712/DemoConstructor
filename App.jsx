import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import Addtodo from './components/Addtodo.jsx'
import Todolist from './components/Todolist.jsx'

class App extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props
	
      return (
         <div>
            <Addtodo onAddClick = {text => dispatch(addTodo(text))} />
            <Todolist todos = {visibleTodos}/>
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}

export default connect(select)(App)