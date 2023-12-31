import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ToDoPage from './pages/ToDoPage';
import ToDoDetails from './ToDo/ToDoDetails';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="todo/:id" element={<ToDoDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
