import React from 'react';

import { compose } from 'core/utils';
import { Router } from 'core/components/router';
import withModelActivation from 'core/components/withModelActivation';

import { reducer } from './ui-model';
import { Layout } from './components';
import { Dashboard } from './routes';

const App = () => (
  <Layout>
    <Router>
      <Dashboard path="/" />
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
