import React from 'react';

import UISetup from 'components/ui-setup';
import Login from 'components/login';

const LoginPage = ({ data }: Props) => (
  <UISetup content={data}>
    <Login />
  </UISetup>
);

export default LoginPage;
