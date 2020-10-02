import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';

import styles from './styles';
import { snackbarOpen, snackbarMessage, closeSnackbar } from './ui-model';

type Props = {
  classes: Object,
  anchorOrigin?: Object,
  autoHideDuration?: number,
  message?: string,
  open: ?boolean,
  closeSnackbar: () => void,
};

const Snackbar = ({
  classes,
  anchorOrigin,
  autoHideDuration,
  open,
  message,
  closeSnackbar,
  ...rest
}: Props) => {
  const Message = <span id="snackbar-message">{message}</span>;

  return (
    <MUISnackbar
      {...rest}
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={closeSnackbar}
      autoHideDuration={autoHideDuration}
      ContentProps={{
        'aria-describedby': 'snackbar-message',
        className: classes.content,
      }}
      className={classes.snackbar}
      message={Message}
    />
  );
};

Snackbar.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: 5000,
  message: '',
};

export default compose(
  withModelProps({ snackbarOpen, snackbarMessage, closeSnackbar }),
  withStyles(styles),
)(Snackbar);
