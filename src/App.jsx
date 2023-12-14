import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Layout from './components/commons/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
