import { Component } from 'react';

import Header from './Header/Header';
import FormLogin from './FormLogin/FormLogin';
import Modal from './Modal/Modal';
import { nanoid } from 'nanoid';
// import ToDoList from './TodoList/TodoList';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';
class App extends Component {
  state = {
    showModal: false,
    searchText: '',
  };

  toggleShowModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="container">
        <Header toggleShowModal={this.toggleShowModal} />

        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
        {showModal && (
          <Modal toggleShowModal={this.toggleShowModal}>
            <FormLogin createUser={this.createUser} toggleShowModal={this.toggleShowModal} />
          </Modal>
        )}
        {/* <ToDoList /> */}
      </div>
    );
  }
}

export default App;
