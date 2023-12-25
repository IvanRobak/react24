import { Component } from 'react';
import todo from '../../todo.json';
import ToDo from '../Todo/Todo';
import FormTodo from '../FormTodo/FormTodo';
import { nanoid } from 'nanoid';

class ToDoList extends Component {
  state = {
    todoList: todo,
    isDelete: false,
    isCreate: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.todoList.length > this.state.todoList.length) {
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.todoList.length < this.state.todoList.length) {
      this.setState({ isCreate: true });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
    }
  }

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
        {this.state.isDelete && (
          <div className="alert alert-danger" role="alert">
            To-do delete!
          </div>
        )}
        {this.state.isCreate && (
          <div className="alert alert-success" role="alert">
            To-do create successfully!
          </div>
        )}
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
