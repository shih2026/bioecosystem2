import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error: any) {
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red; font-family: sans-serif;">
      <h1>Application Error</h1>
      <pre>${error.message}</pre>
      <p>請確認您的變數設定是否正確，或查看控制台 (Console) 取得更多資訊。</p>
    </div>
  `;
}
