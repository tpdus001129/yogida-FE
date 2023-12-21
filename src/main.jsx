import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './store/reactQuery.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* 옵션: 개발 도구 사용 */}
          {/* <ReactQueryDevtools />  */}
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);
