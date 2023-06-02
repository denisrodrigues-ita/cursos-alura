import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/@/components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Prato from "./pages/Prato";

const Home = lazy(() => import('/@/pages/Home'));
const Cardapio = lazy(() => import('/@/pages/Cardapio'));
const Sobre = lazy(() => import('/@/pages/Sobre'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p> Carregando... </p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pratos/:pratoId" element={<Prato />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
