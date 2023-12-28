import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import { nanoid } from 'nanoid';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import FormLogin from '../FormLogin/FormLogin';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  return (
    <div className="container">
      <Toaster position="top-right" />

      <Header toggleShowModal={toggleShowModal} />
      <Outlet />
      {showModal && (
        <Modal toggleShowModal={toggleShowModal}>
          <FormLogin createUser={createUser} toggleShowModal={toggleShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
