import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './ProductList';
import InsertProduct from './InsertProduct';
import UpdateProduct from './UpdateProduct';
function App() {
  return (
<div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/create' element={<InsertProduct />} />
        <Route path='/update/:id' element={<UpdateProduct />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
