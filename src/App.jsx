import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import BooksPage from "./pages/BooksPage/BooksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
