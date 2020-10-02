const styles = () => ({
  container: {
    left: 0,
    top: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    // maxWidth: app.maxWidth,
    margin: '0 auto',
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    // width: `calc(100% - ${app.sidebarWidth}px)`,
    // height: `calc(100vh - ${app.headerHeight}px)`,
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});

export default styles;
