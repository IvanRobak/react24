import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from './Header/Header';
import FormLogin from './FormLogin/FormLogin';
import Modal from './Modal/Modal';
import { nanoid } from 'nanoid';
import ToDoList from './TodoList/TodoList';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleShowModal = () => setShowModal(!showModal);

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  const handleSearch = searchText => setSearchText(searchText);

  return (
    <div className="container">
      <Toaster position="top-right" />
      <Header toggleShowModal={toggleShowModal} />

      {/* <Search handleSearch={handleSearch} /> */}
      {/* <ContentInfo searchText={searchText} /> */}
      {showModal && (
        <Modal toggleShowModal={toggleShowModal}>
          <FormLogin createUser={createUser} toggleShowModal={toggleShowModal} />
        </Modal>
      )}
      <ToDoList />
    </div>
  );
};

export default App;
