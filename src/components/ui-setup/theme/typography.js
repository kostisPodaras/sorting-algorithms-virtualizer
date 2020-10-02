const typography = () => ({
  fontSize: 16,
  h1: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h3: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h4: {
    fontFamily: 'CFAstyStd-Bold',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0.3,
  },
  h5: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0.2,
  },
  h6: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0.2,
  },
  body1: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: 0.3,
  },
  body2: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: 0.3,
  },
  button: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0.2,
    textTransform: 'none',
  },
  // when link, use overline as well
  overline: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 0.4,
  },
  caption: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: 0,
  },
  // captionSmall: {
  subtitle2: {
    fontFamily: 'CFAstyStd-Medium',
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: 0.3,
  },
  // label: {
  subtitle1: {
    fontFamily: 'CFAstyStd-Book',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 0.3,
  },

  // do not exist in material-ui typography label, captionSmall and link properties
  // maybe override this like this:
  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h1: 'h2',
  //       h2: 'h2',
  //       h3: 'h2',
  //       h4: 'h2',
  //       h5: 'h2',
  //       h6: 'h2',
  //       subtitle1: 'h2',
  //       subtitle2: 'h2',
  //       body1: 'span',
  //       body2: 'span',
  //     },
  //   },
  // },
});

export default typography;
