import { Component } from 'react';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({ email: this.state.email, password: this.state.password });
    this.props.toggleShowModal();
  };

  handleCheckout = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={this.state.isChecked}
              onChange={this.handleCheckout}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I'm agree
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isChecked}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default FormLogin;
