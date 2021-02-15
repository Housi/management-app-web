import { useState, forwardRef } from 'react'
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { TextField } from "@components/ui";

type Props = {
  error?: Record<string, Object> & true;
};

export const PasswordField = forwardRef(({ error }: Props, ref) => {
  const [maskPassword, setMask] = useState(true)

  return (
    <TextField
      error={error}
      name={"password"}
      type={maskPassword ? "password" : 'text'}
      inputRef={ref}
      InputProps={{
        endAdornment: <InputAdornment position={"end"}>
          <IconButton
            aria-label={"toggle password visibility"}
            onClick={() => setMask(!maskPassword)}
            edge={"end"}
          >
            {maskPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>,
      }}
    />

  );
});
