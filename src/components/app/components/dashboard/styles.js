const styles = ({ palette }) => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: palette.white,
  },
  logo: {
    width: 400,
    height: 150,
  },
  text: {
    color: palette.text.grey.primary,
    marginTop: 30,
    cursor: 'pointer',
  },
});

export default styles;
