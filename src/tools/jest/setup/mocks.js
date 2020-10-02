// import mockHOC from 'test/mocks/mockHOC';
import React from 'react';

// ========================================================
// Material-ui modules
// ========================================================
const MATERIAL_UI_MODULES_TO_MOCK = [
  'Backdrop',
  'Button',
  'CircularProgress',
  'FilledInput',
  'Grid',
  'Hidden',
  'IconButton',
  'Input',
  'Paper',
  'Radio',
  'MenuItem',
  'Slide',
  'StepConnector',
  'Tabs',
  'Tooltip',
  'Typography',
];

MATERIAL_UI_MODULES_TO_MOCK.map((moduleName) =>
  jest.mock(`@material-ui/core/${moduleName}`, () => moduleName),
);

jest.mock('@material-ui/core/styles/', () => ({
  withStyles: () => (Component) => {
    // eslint-disable-next-line global-require
    const idObj = require('identity-obj-proxy');
    return <Component classes={idObj} />;
  },
}));
