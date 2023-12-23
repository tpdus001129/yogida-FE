import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './store/reactQuery.js';
import { RecoilRoot } from 'recoil';
import ModalWithOk from './components/Modal/ModalWithOk.jsx';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import Loading from './pages/Loading.jsx';
import ApiErrorBoundary from './pages/ApiErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ApiErrorBoundary />}>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ModalWithOk />
            <BrowserRouter>
              <App />
              <Toaster />
            </BrowserRouter>
          </RecoilRoot>
          {/* <ReactQueryDevtools />  */}
          {/* 옵션: 개발 도구 사용 */}
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);
