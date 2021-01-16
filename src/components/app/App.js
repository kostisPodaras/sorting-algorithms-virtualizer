import React from 'react';

import { compose } from 'core/utils';
import ProtectedRoute from 'core/components/protected-route';
import withModelActivation from 'core/components/withModelActivation';
import { Router } from 'core/components/router';

import { reducer } from './ui-model';
import { Layout } from './components';
import { Home } from './routes';

const App = () => (
  <Layout>
    <Router basepath="/app/">
      <ProtectedRoute path="/" component={Home} />
    </Router>
  </Layout>
);

export default compose(
  withModelActivation({
    reducer: {
      ui: reducer,
    },
  }),
)(App);
