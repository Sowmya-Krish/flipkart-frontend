import { Box } from "@mui/material";

//components
import Header from "./Components/Header/Header";
import Home from "./Components/home/Home";

import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./Components/details/DetailView";
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}> 
        <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />

            </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
