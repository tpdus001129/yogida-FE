import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './store/reactQuery.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 애플리케이션 내에서 발생한 javascript에러를 처리 */}
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      {/* 데이터를 가져오는 동안 로딩상태를 처리 */}
      {/* 코드 분할된 모듈이 로드될 때까지 대기 */}
      <Suspense fallback={<div>loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools /> {/* 옵션: 개발 도구 사용 */}
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);
