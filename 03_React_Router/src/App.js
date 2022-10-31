import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/:itemId" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
