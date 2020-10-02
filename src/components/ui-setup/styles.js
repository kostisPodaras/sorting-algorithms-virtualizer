// Global styles
const styles = ({ palette }) => ({
  '@global': {
    html: {
      width: '100%',
      height: '100%',
      margin: 0,
      fontSize: 16,
      overflow: 'hidden',
    },
    body: {
      width: '100%',
      // minWidth: app.minWidth,
      height: '100%',
      margin: 0,
      overflow: 'hidden',
      backgroundColor: palette.common.white,
    },
    '@keyframes autofill': {
      '100%': {
        background: 'transparent',
      },
    },
    input: {
      opacity: 1,
      '&:-webkit-autofill': {
        WebkitAnimationName: 'autofill',
        WebkitAnimationFillMode: 'both',
      },
      '&::-ms-clear': {
        display: 'none !important',
      },
    },
    svg: {
      display: 'block',
    },
  },
  container: {
    // minWidth: 1440,
    minHeight: '100vh',
    overflow: 'hidden',

    '& > div': {
      width: '100%',
    },
  },
});

export default styles;
