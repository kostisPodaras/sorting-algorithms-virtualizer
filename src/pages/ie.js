import React from 'react';

import UISetup from 'components/ui-setup';
import IE from 'components/ie';

const LoginPage = ({ data }: Props) => (
  <UISetup content={data}>
    <IE />
  </UISetup>
);

export default LoginPage;
