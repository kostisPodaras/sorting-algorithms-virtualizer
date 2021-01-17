import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    headerHeight: 90,
    sidebarWidth: 50,
    maxWidth: 1920,
    minWidth: 320,
  },
};

if (
  typeof window !== 'undefined' &&
  process.env.NODE_ENV === 'development' &&
  process.env.NODE_ENV !== 'test'
) {
  // Do not replace with log(), it affects test coverage
  /* eslint-disable no-console */
  console.log('--- THEME ---', theme);
}

export default theme;
