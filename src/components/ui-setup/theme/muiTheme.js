import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import merge from 'lodash/merge';

import palette from './palette';
import typography from './typography';

// TODO: Replace fonts...

import CFAstyStdBoldWoff from '../fonts/CFAstyStd-Bold.woff';
import CFAstyStdBookWoff from '../fonts/CFAstyStd-Book.woff';
import CFAstyStdBookOblique from '../fonts/CFAstyStd-BookOblique.woff';
import CFAstyStdLight from '../fonts/CFAstyStd-Light.woff';
import CFAstyStdMedium from '../fonts/CFAstyStd-Medium.woff';
import CFAstyStdMediumOblique from '../fonts/CFAstyStd-MediumOblique.woff';

const cfAstyStdBold = {
  fontFamily: 'CFAstyStd-Bold',
  src: `local('CFAstyStd-Bold'), url(${CFAstyStdBoldWoff}) format('woff')`,
};

const cfAstyStdBook = {
  fontFamily: 'CFAstyStd-Book',
  src: `local('CFAstyStd-Book'), url(${CFAstyStdBookWoff}) format('woff')`,
};

const cfAstyStdBookOblique = {
  fontFamily: 'CFAstyStd-BookOblique',
  src: `local('CFAstyStd-BookOblique'), url(${CFAstyStdBookOblique}) format('woff')`,
};

const cfAstyStdLight = {
  fontFamily: 'CFAstyStd-Light',
  src: `local('CFAstyStd-Light'), url(${CFAstyStdLight}) format('woff')`,
};

const cfAstyStdMedium = {
  fontFamily: 'CFAstyStd-Medium',
  src: `local('CFAstyStd-Medium'), url(${CFAstyStdMedium}) format('woff')`,
};

const cfAstyStdMediumOblique = {
  fontFamily: 'CFAstyStd-MediumOblique',
  src: `local('CFAstyStd-MediumOblique'), url(${CFAstyStdMediumOblique}) format('woff')`,
};

const muiTheme = createMuiTheme({
  props: {
    MuiWithWidth: {
      initialWidth: 'lg', // Breakpoint being globally set 🌎!
    },
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 360, sm: 768, md: 960, lg: 1366, xl: 1920 },
  },
  typography: {
    useNextVariants: true,
  },
  palette,
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.12)', // Level 1 (Rest) according to Design System
    '0px 1px 8px rgba(0, 0, 0, 0.12)', // Level 2 (Hover) according to Design System
    '0px 1px 24px rgba(0, 0, 0, 0.12)', // Level 5 (Popovers) according to Design System
    '0px 6px 16px rgba(0, 0, 0, 0.06)', // Level 6 (Modals) according to Design System
  ],
});

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography),
);

// Overrides
muiTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [
        cfAstyStdBold,
        cfAstyStdBook,
        cfAstyStdBookOblique,
        cfAstyStdLight,
        cfAstyStdMedium,
        cfAstyStdMediumOblique,
      ],
    },
  },
  // MuiDialog: {
  //   root: {
  //     zIndex: 3000,
  //   },
  // },
  // MuiSnackbarContent: {
  //   root: {
  //     backgroundColor: muiTheme.palette.primary.main,
  //   },
  // },
  // MuiFormLabel: {
  //   root: {
  //     color: `${muiTheme.palette.text.primary} !important`,
  //   },
  //   focused: {
  //     color: `${muiTheme.palette.primary.main} !important`,
  //   },
  // },
  // MuiInput: {
  //   underline: {
  //     '&:after': {
  //       borderBottom: `2px solid ${muiTheme.palette.primary.main}`,
  //     },
  //   },
  // },
  // MuiButton: {
  //   root: {
  //     fontFamily: cfAstyStdBook,
  //     boxShadow: 'none !important',
  //     zIndex: 3,
  //     borderRadius: 99,
  //     fontWeight: 400,
  //     backgroundColor: 'transparent',
  // fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
  //     border: `1px solid ${muiTheme.palette.common.white}`,
  //     color: muiTheme.palette.common.white,
  //     '&:hover': {
  //       backgroundColor: 'transparent',
  //     },
  // },
  //   textPrimary: {
  //     border: `1px solid ${muiTheme.palette.primary.main}`,
  //     color: muiTheme.palette.primary.main,
  //   },
  //   textSecondary: {
  //     border: `1px solid ${muiTheme.palette.secondary.main}`,
  //     color: muiTheme.palette.secondary.main,
  //   },
  //   containedPrimary: {
  //     border: 'none !important',
  //   },
  //   disabled: {
  //     border: `1px solid rgba(0, 0, 0, 0.26)`,
  //   },
  //   sizeSmall: {
  //     padding: `10px 20px`,
  //   },
  //   sizeLarge: {
  //     padding: `20px 70px`,
  //   },
  // },
  // MuiTypography: {
  //   h1: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 46,
  //     },
  //     [muiTheme.breakpoints.down('xs')]: {
  //       fontSize: 32,
  //     },
  //   },
  //   h2: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 28,
  //     },
  //   },
  //   h3: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 28,
  //     },
  //   },
  //   h4: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 20,
  //     },
  //   },
  //   h5: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 18,
  //     },
  //     [muiTheme.breakpoints.down('xs')]: {
  //       fontSize: 16,
  //     },
  //   },
  //   h6: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 16,
  //     },
  //   },
  //   subtitle1: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 14,
  //     },
  //   },
  //   body1: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 14,
  //     },
  //   },
  //   body2: {
  //     [muiTheme.breakpoints.down('sm')]: {
  //       fontSize: 12,
  //     },
  //   },
  // },
};

export default muiTheme;
