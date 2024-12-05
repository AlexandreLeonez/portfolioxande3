import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/contato';
import NotFound from './pages/NotFound';
import './assets/styles/Portfolio.css';
import './assets/styles/home.css';
import './assets/styles/contato.css';
import './assets/styles/app.css';
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Portfolio">Portfólio</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
      <footer>© 2024 Meu Portfólio. Todos os direitos reservados.</footer>
    </Router>
  );
  
}

export default App;
