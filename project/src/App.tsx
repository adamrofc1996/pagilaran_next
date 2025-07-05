import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { GlobalPresencePage } from './pages/GlobalPresencePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { HeritagePage } from './pages/HeritagePage';
import './i18n/i18n'; // Import i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/chat/ChatWidget';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;