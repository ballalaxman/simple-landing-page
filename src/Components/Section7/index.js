import React from "react";
import { Stack } from "@mui/system";
import { Box, Button, Container, Typography } from "@mui/material";

export const Index = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: "#5454d4",
          py: 7,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            width="100%"
            direction={{ sm: "row", xs: "column" }}
            alignItems="center"
            alignContent="center"
            spacing={{ sm: 40, xs: 10 }}
          >
            <Stack>
              <Typography
                sx={{
                  fontSize: { sm: "3.375rem", xs: "2.375rem" },
                  fontWeight: "bold",
                  lineHeight: "1.17",
                  lineSpacing: "-1.69px",
                  color: "#fff",
                }}
              >
                Enjoy every beat.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "3.375rem", xs: "2.375rem" },
                  fontWeight: "bold",
                  lineHeight: "1.17",
                  lineSpacing: "-1.69px",
                  color: "#fff",
                }}
              >
                Get a new headphone.
              </Typography>
            </Stack>
            <Button
              varient="contained"
              sx={{
                background: "#fedc5a",
                width: "10.313rem",
                height: "3.414rem",
                borderRadius: "4.5px",
                border: "solid 0.9px #f0c931",
                color: "black",
              }}
            >
              Buy Now
            </Button>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};
export default Index;
