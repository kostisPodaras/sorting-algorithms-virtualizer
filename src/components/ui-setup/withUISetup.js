import React from 'react';

import { createStore } from 'store';

const withUISetup = (Component) => (props) => {
  const store = createStore();
  const { history } = store;

  return <Component history={history} {...props} />;
};

export default withUISetup;
