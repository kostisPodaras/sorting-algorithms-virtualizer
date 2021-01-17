const styles = ({ palette, app }) => ({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: `${app.headerHeight}px 1fr`,
    gridTemplateAreas: `
    '  header'
    '  body '`,

    // [breakpoints.up('md')]: {
    //   gridTemplateColumns: `${app.sidebarWidth}px 1fr`,
    //   gridTemplateRows: `${app.headerHeight}px 1fr`,
    //   gridTemplateAreas: `
    //       'sidebar  header'
    //       'sidebar  body '`,
    // },
  },
  body: {
    position: 'relative',
    gridArea: 'body',
    backgroundColor: palette.grey[100],
    overflowY: 'scroll',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
  },
});

export default styles;
