import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const Sample = lazy(() => import('./pages/Sample/SamplePage'));

  return (
    <div style={{ height: 'auto' }}>
      <Router>
        <Suspense fallback={<h1>Loading..</h1>}>
          <Switch>
            <Route path="/sample" component={Sample} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
