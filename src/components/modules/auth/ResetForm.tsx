import { useForm } from "react-hook-form";
import { TextField, FormTitle, AppLink } from "@components/ui";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";

export const ResetForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const onSubmit = () => router.push(`/reset-password-success`);

  return (
    <>
      <FormTitle>{`Reset Password`}</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            error={errors.mail}
            name="email"
            type="email"
            inputRef={register({ required: true })}
          />
          <Box>
            <input type="submit" hidden />
            <Button onClick={handleSubmit(onSubmit)}>Send Instructions</Button>
          </Box>
          <Box>
            Remember your password?
            <AppLink href={"/sign-in"}>Sign In</AppLink>
          </Box>
        </Box>
      </form>
    </>
  );
};
