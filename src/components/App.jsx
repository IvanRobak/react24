import { Component } from 'react';

import Header from './Header/Header';
import Counter from './Counter/Counter';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  // openShowModal = () => {
  //   this.setState({ showModal: true });
  // };

  // closeShowModal = () => {
  //   this.setState({ showModal: false });
  // };

  toggleShowModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="container">
        <Header toggleShowModal={this.toggleShowModal} />
        <Counter />
        {showModal && <Modal toggleShowModal={this.toggleShowModal}>Some</Modal>}
      </div>
    );
  }
}

export default App;
