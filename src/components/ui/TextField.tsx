import {
  TextField as MUITextField,
  TextFieldProps,
} from "@material-ui/core";

type Props = {
  error?: Record<string, Object> & true;
} & TextFieldProps;

export const TextField = ({ error, ...props }: Props) => (
  <MUITextField
    label={props.label || props.name}
    helperText={error && (error.message || 'Error')}
    {...{ ...props, error: !!error }}

  />
);
