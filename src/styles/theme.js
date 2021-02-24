import { createMuiTheme } from '@material-ui/core';
import { typography } from './typography';
import { palette } from './palette';
import { overrides } from './overrides';
import { props } from './props';
import { shadows } from './shadows';

export const theme = createMuiTheme({
  typography,
  palette,
  overrides,
  props,
  shadows,
});
