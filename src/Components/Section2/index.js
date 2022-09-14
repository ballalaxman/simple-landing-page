import { Box, Stack } from "@mui/system";
import React from "react";
import Earphones from "../Images/bitmap2.png";
import Card from "../Images/cards.png";
import Smartphone from "../Images/smartphone.png";
import { Container, Typography } from "@mui/material";

export const Index = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          py: { sm: 15 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ sm: "row", xs: "column" }}
            alignItems="center"
            alignContent="center"
            justifyContent="space-between"
            sx={{
              pt: 5,
              pb: 5,
              width: "100%",
            }}
            spacing={5}
          >
            <Stack spacing={8}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontSize: "3.375rem",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    lineHeight: "1.17",
                    letterSpacing: "-1.69px",
                    color: "#19191b",
                  }}
                >
                  Get noise free <br /> sound everytime
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontSize: "1.181rem",
                    letterSpacing: "-0.59px",
                    color: "#696871",
                    lineHeight: "1.86",
                  }}
                >
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack
                  width="20.188rem"
                  height="5.375rem"
                  direction="row"
                  spacing={2}
                  sx={{
                    border: "solid 0.9px",
                    borderRadius: "9px",
                    borderColor: "#eae9f2",
                    alignItems: "center",
                    alignContent: "center",
                    pl: 2,
                  }}
                >
                  <Stack
                    width="3.125rem"
                    height="3.125rem"
                    justifyContent="center"
                    alignIntems="center"
                    alignContent="center"
                    sx={{
                      background: "rgba(240, 64, 55, 0.1)",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <Box width="100%">
                      <img src={Card} width="40%" />
                    </Box>
                  </Stack>
                  <Stack>
                    <Typography>50+ Unique Design Blocks</Typography>
                    <Typography>With Carefully Coded</Typography>
                  </Stack>
                </Stack>
                <Stack
                  width="20.188rem"
                  height="5.375rem"
                  direction="row"
                  spacing={2}
                  sx={{
                    border: "solid 0.9px",
                    borderRadius: "9px",
                    borderColor: "#eae9f2",
                    alignItems: "center",
                    alignContent: "center",
                    pl: 2,
                  }}
                >
                  <Stack
                    width="3.125rem"
                    height="3.125rem"
                    justifyContent="center"
                    alignIntems="center"
                    alignContent="center"
                    sx={{
                      background: "rgba(84, 84, 212, 0.1)",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <Box width="100%">
                      <img src={Smartphone} width="40%" />
                    </Box>
                  </Stack>
                  <Stack>
                    <Typography>Mobile first Design</Typography>
                    <Typography>On Every Devices</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Box>
              <img src={Earphones} width="" height="" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};
export default Index;
