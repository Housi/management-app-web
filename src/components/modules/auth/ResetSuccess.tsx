import { FormTitle, AppLink } from "@components/ui";
import { Box, Button, Typography } from "@material-ui/core";

export const ResetSuccess = () => (
  <>
    <FormTitle>Check your mail</FormTitle>

    <Box>
      <Typography>
        {`We have sent instructions to reset your password`}
      </Typography>
      <Box>
        <a href="mailto:" target="_blank">
          <Button>Open Email App</Button>
        </a>
      </Box>
      <Box>
        Did not receive the email? Check your spam or
        <AppLink href={"/reset-password"}>resend email</AppLink>
      </Box>
    </Box>
  </>
);
