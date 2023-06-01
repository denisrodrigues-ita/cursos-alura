import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/@/components/Header";
import Cardapio from "/@/pages/Cardapio";
import Home from "/@/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
