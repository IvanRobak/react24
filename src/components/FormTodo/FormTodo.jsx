import { Component } from 'react';

class FormTodo extends Component {
  state = {
    todo: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Create todo
            </label>
            <input
              name="todo"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add to do
          </button>
        </form>
      </>
    );
  }
}

export default FormTodo;
