import React, { useEffect } from 'react';

import { injectEpic } from 'core/models/epics';
import { injectReducer } from 'core/models/reducer';
import { compose } from 'core/utils';

import withStoreProp from './withStoreProp';

type Props = {
  store: Object,
};

const withModel = (epics, reducer) => (Component) => ({
  store,
  ...restProps
}: Props) => {
  reducer && injectReducer(store, reducer);

  useEffect(() => {
    const stopEpics = epics && injectEpic(store, epics);

    return () => epics && stopEpics();
  }, [store]);

  return <Component {...restProps} />;
};

const withModelActivation = ({ epics, reducer }) => (Component) =>
  compose(withStoreProp, withModel(epics, reducer))(Component);

export default withModelActivation;
