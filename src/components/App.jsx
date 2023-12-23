import { Component } from 'react';

import Header from './Header/Header';
import FormLogin from './FormLogin/FormLogin';
import Modal from './Modal/Modal';
// import ToDoList from './TodoList/TodoList';
class App extends Component {
  state = {
    showModal: false,
  };

  toggleShowModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="container">
        <Header toggleShowModal={this.toggleShowModal} />
        {showModal && (
          <Modal toggleShowModal={this.toggleShowModal}>
            <FormLogin />
          </Modal>
        )}
        {/* <ToDoList /> */}
      </div>
    );
  }
}

export default App;
