import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { compose } from 'core/utils';
import { withToggleValue } from 'core/components/withToggleValue';
import { withModelProps } from 'core/components/model-props';
import withSelectValue from 'core/components/withSelectValue';
import { generateNewArray } from 'models/array';

import algorithms from './config';
import styles from './styles';

type Props = {
  classes: Object,
  toggleValue: boolean,
  selectValue: string,

  onToggle: () => {},
  onSelect: () => {},
  generateNewArray: () => {},
};

const Header = ({
  classes,
  toggleValue,
  selectValue,
  onToggle,
  onSelect,
  generateNewArray,
}: Props) => (
  <div className={classes.container}>
    <AppBar position="static" classes={{ root: classes.rootBar }}>
      <Toolbar classes={{ root: classes.rootToolbar }}>
        <Grid container justify="space-between" alignItems="center">
          <div className={classes.column}>
            <Typography
              onClick={generateNewArray}
              variant="body2"
              className={classes.text}>
              Generate New Array
            </Typography>
          </div>

          <div className={classes.column}>
            <Typography variant="body2" className={classes.text}>
              Change array size / sorting speed
            </Typography>
            <Slider
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
              onChange={(event, value) => console.log(value)}
            />
          </div>

          <Grid
            container
            justify="flex-end"
            alignItems="center"
            className={classes.column}>
            <Typography variant="caption" className={classes.algorithmText}>
              Choose algorithm
            </Typography>
            <Select
              open={toggleValue}
              onClose={onToggle}
              onOpen={onToggle}
              value={selectValue}
              onChange={(e) => {
                onSelect(e);
                console.log(e.target.value);
              }}>
              {algorithms.map((algorithm) => (
                <MenuItem key={algorithm} value={algorithm}>
                  {algorithm}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

export default compose(
  withToggleValue,
  withSelectValue,
  withModelProps({ generateNewArray }),
  withStyles(styles),
)(Header);
