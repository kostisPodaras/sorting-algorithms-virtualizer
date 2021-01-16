import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import merge from 'lodash/merge';

import palette from './palette';
import typography from './typography';

const muiTheme = createMuiTheme({
  props: {
    MuiWithWidth: {
      initialWidth: 'lg', // Breakpoint being globally set 🌎!
    },
  },
  typography: {
    useNextVariants: true,
  },
  palette,
  breakpoints: {
    keys: ['sm', 'md', 'lg', 'xl'],
    values: { sm: 320, md: 768, lg: 1024, xl: 1440 },
  },
});

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography),
);

// Overrides
muiTheme.overrides = {
  MuiChip: {
    root: {
      height: 'auto',
      padding: '3px 4px',
      backgroundColor: muiTheme.palette.accent2[100],
    },
  },
  MuiFormLabel: {
    root: {
      color: `${muiTheme.palette.text.primary} !important`,
    },
    focused: {
      color: `${muiTheme.palette.primary[500]} !important`,
    },
  },
  MuiInput: {
    // underline: {
    //   '&:after': {
    //     borderBottom: `2px solid ${muiTheme.palette.primary[500]}`,
    //   },
    // },
    input: {
      '&::placeholder': {
        color: `${muiTheme.palette.text.grey[11]}`,
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 400,
      },
      color: `${muiTheme.palette.text.grey[1]}`,
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
  MuiAppBar: {
    root: {
      backgroundColor: `${muiTheme.palette.common.white} !important`,
    },
  },
  MuiTab: {
    textColorPrimary: {
      color: muiTheme.palette.grey[600],
    },
  },
  MuiButton: {
    root: {
      boxShadow: 'none !important',
      borderRadius: 6,
      padding: 0,
      minWidth: 0,
    },
    text: {
      padding: 0,
    },
    contained: {
      '&:disabled': {
        backgroundColor: muiTheme.palette.primary[500],
        color: muiTheme.palette.text.white,
        opacity: 0.3,
      },
    },
    containedPrimary: {
      backgroundColor: muiTheme.palette.primary[500],
      color: muiTheme.palette.common.white,

      '&:hover': {
        backgroundColor: muiTheme.palette.primary[500],
        opacity: 0.7,
      },
    },
    containedSecondary: {
      backgroundColor: muiTheme.palette.common.white,
      color: muiTheme.palette.primary[500],

      '&:hover': {
        backgroundColor: muiTheme.palette.common.white,
        opacity: 0.7,
      },

      // if i want to style disabled styles of secondary color
      // '&:disabled': {
      //   backgroundColor: muiTheme.palette.common.white,
      //   color: muiTheme.palette.text.white,
      //   opacity: 0.3,
      // },
    },
    containedSizeLarge: {
      padding: `10px 43px 14px 42px`,
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500,
    },
    containedSizeSmall: {
      padding: `4px 16px`,
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500,
    },
    textSizeSmall: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500,
      padding: 0,
    },
    startIcon: {
      marginRight: 3,
    },
  },
  MuiToggleButtonGroup: {
    borderRadius: 42,

    groupedHorizontal: {
      '&:last-child': {
        borderRadius: 42,
      },

      '&:not(:last-child)': {
        borderRadius: 42,
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
      },
    },
  },
  MuiToggleButton: {
    root: {
      padding: '8px 12px',
      color: muiTheme.palette.text.black,

      '&$selected': {
        backgroundColor: muiTheme.palette.primary[500],
        color: muiTheme.palette.text.white,

        '&:hover': {
          backgroundColor: muiTheme.palette.primary[500],
          color: muiTheme.palette.text.white,
        },
      },
    },
  },
  MuiAutocomplete: {
    input: {
      width: '100% !important',
    },
  },
};

export default muiTheme;
