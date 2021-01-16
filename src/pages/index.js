import React from 'react';

import Layout from 'components/layout';
import UISetup from 'components/ui-setup';
import App from 'components/app';

const AppPage = () => (
  <UISetup>
    <Layout>
      <App />
    </Layout>
  </UISetup>
);

export default AppPage;
