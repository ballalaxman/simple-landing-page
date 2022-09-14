import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";

export const Index = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: { sm: "cover", xs: "cover, cover" },
        backgroundPosition: { xs: "center" },
        backgroundRepeat: "no-repeat",
        height: { sm: "44rem", xs: "max-content" },
        p: { xs: 2 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          sx={{
            height: "100%",
            width: { sm: "50%" },
          }}
          spacing={3}
        >
          <Typography
            sx={{
              fontSize: "3.375rem",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.17",
              letterSpacing: "-1.69px",
              color: "#fff",
            }}
          >
            2k+ people are using this website
          </Typography>
          <Typography
            sx={{
              fontSize: "1.181rem",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.86",
              letterSpacing: "-0.59px",
              color: "#fff",
            }}
          >
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#fedc5a",
              width: "10.313rem",
              height: "4.414rem",
              borderRadius: "4.5px",
              border: "solid 0.9px #f0c931",
              color: "black",
            }}
          >
            Try it now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default Index;
