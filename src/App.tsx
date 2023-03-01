import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {

  const outlet = useRoutes(router)

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        {outlet}
      </React.Suspense>
    </div>
  );
}

export default App;
