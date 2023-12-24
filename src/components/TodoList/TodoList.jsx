import { Component } from 'react';
import todo from '../../todo.json';
import ToDo from '../Todo/Todo';
import FormTodo from '../FormTodo/FormTodo';
import { nanoid } from 'nanoid';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckCompleted = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(todo => todo.id !== id),
      };
    });
  };

  addTodo = value => {
    this.setState(prev => {
      return {
        todoList: [...prev.todoList, { id: nanoid(), title: value, completed: false }],
      };
    });
  };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <FormTodo addTodo={this.addTodo} />
        <ul className="list-group list-group-flush">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
