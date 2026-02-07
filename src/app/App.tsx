import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ConsultationPage } from './components/ConsultationPage';
import { ThankYouPage } from './components/ThankYouPage';
import { DynamicBackground } from './components/DynamicBackground';
import { Navbar } from './components/Navbar';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ImprintPage } from './components/ImprintPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename="/Portfolio">
          <DynamicBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/imprint" element={<ImprintPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
