import React from 'react';

import { isBrowser } from 'core/utils';

type Props = {
  authenticated: boolean,
};

const NotFound = ({ authenticated }: Props) => {
  if (isBrowser()) {
    window.location = authenticated ? '/app/' : '/';
  }

  return <div />;
};

export default NotFound;
