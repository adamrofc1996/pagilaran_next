import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HeritagePage } from './pages/HeritagePage';
import { ProductsPage } from './pages/ProductsPage';
import { GlobalPresencePage } from './pages/GlobalPresencePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { ModernLayoutPage } from './pages/ModernLayoutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-primary-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/heritage" element={<HeritagePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/global-presence" element={<GlobalPresencePage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/modern-layout" element={<ModernLayoutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;