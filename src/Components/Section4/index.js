import { Container, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import Rectangle from "../Images/rectangle.png";
import Rectanglecopy from "../Images/rectangle-copy.png";
import React from "react";

export const Index = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          py: { sm: 10, xs: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Stack width="100%" direction="column" spacing={3}>
            <Stack alignItems="center" alignContent={"center"} spacing={4}>
              <Typography
                sx={{
                  fontSize: "3.375rem",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "1.17",
                  textAlign: "center",
                  color: "#19191b",
                }}
              >
                Enjoy your music
              </Typography>
              <Typography
                sx={{
                  width: { sm: "60%" },
                  fontSize: "1.181rem",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "1.86",
                  textAlign: "center",
                  letterSpacing: "-0.59px",
                  color: "#696871",
                }}
              >
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Typography>
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              justifyContent="space-between"
              sx={{
                width: "100%",
              }}
              alignItems="center"
              alignContent="center"
              spacing={3}
            >
              <Box width={{ sm: "19.688rem", xs: "100%" }} height="29rem">
                <img src={Rectangle} />
              </Box>
              <Box width={{ sm: "41.063rem", xs: "100%" }} height="29rem">
                <img src={Rectanglecopy} width="100%" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Index;
