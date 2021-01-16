import React from 'react';

import { Router } from 'core/components/router';

import { Dashboard } from './routes';

const App = () => (
  <Router>
    <Dashboard path="/" />
  </Router>
);

export default App;
