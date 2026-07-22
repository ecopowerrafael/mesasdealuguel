import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function Root() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      console.error("Global error:", event.error);
      if (event.message) {
        setError(event.message);
      }
    };
    window.addEventListener("error", onError);
    return () => window.removeEventListener("error", onError);
  }, []);

  if (error) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', color: '#173D2D' }}>
        <h2 style={{ color: '#173D2D', fontSize: '20px', marginBottom: '12px' }}>Ocorreu um erro ao carregar a aplicação.</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{ padding: '10px 20px', background: '#C8A86A', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Recarregar Página
        </button>
      </div>
    );
  }

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);




