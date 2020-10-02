import React from 'react';

import { compose } from 'core/utils';
import ProtectedRoute from 'core/components/protected-route';
import withModelActivation from 'core/components/withModelActivation';
import { Router } from 'core/components/router';
import { withModelProps } from 'core/components/model-props';

import NotFound from 'components/not-found';
import { authenticated } from 'models/user';

import { reducer } from './ui-model';
import { Layout } from './components';
import { Home } from './routes';

type Props = {
  authenticated: boolean,
};

const App = ({ authenticated }: Props) => (
  <Layout>
    <Router basepath="/app/">
      <ProtectedRoute path="/" authenticated={authenticated} component={Home} />
      <NotFound default authenticated={authenticated} />
    </Router>
  </Layout>
);

export { App };
export default compose(
  withModelActivation({
    reducer: {
      ui: reducer,
    },
  }),
  withModelProps({ authenticated }),
)(App);
