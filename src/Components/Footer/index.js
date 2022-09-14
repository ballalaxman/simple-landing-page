import { Container, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const Index = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={{ sm: "row", xs: "column" }}
          alignItems="center"
          alignContent="center"
          justifyContent="space-between"
          sx={{
            pt: 5,
            pb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.35rem",
              fontWeight: "900",
              letterSpacing: "-0.68px",
              color: "19191b",
            }}
          >
            Omega
          </Typography>
          <Stack direction="row" width="27.43rem" justifyContent="space-evenly">
            <Typography
              sx={{
                fontSize: "0.9rem",
                lineHeight: "2.38",
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                lineHeight: "2.38",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                lineHeight: "2.38",
              }}
            >
              Terms and Conditions
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "0.9rem",
              lineHeight: "2.38",
            }}
          >
            © 2020 UXTheme, All Rights Reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default Index;
