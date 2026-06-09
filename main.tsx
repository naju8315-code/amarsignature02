import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext.tsx';
import './index.css';

// Prevent environment crashes when external tools attempt to wrap or modify read-only window.fetch
try {
  const originalFetch = window.fetch;
  let currentFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get() {
      return currentFetch;
    },
    set(val) {
      currentFetch = val;
    }
  });
} catch (e) {
  console.warn("Could not patch window.fetch accessor:", e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeLanguageProvider>
      <App />
    </ThemeLanguageProvider>
  </StrictMode>,
);
