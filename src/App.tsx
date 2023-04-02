import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Madushan Ranasinghe</title>
        <meta name="description" content="width=device-width, intial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <main className="font-mont bg-light w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
