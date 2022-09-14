import React from "react";
import Headphones from "../Images/bitmap.png";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Index = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#5454d4",
          py: 15,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ sm: "row", xs: "column" }}
            alignItems="center"
            alignContent="center"
            sx={{
              width: "100%",
            }}
            spacing={{ sm: 10 }}
          >
            <Box
              sx={{
                background: "#5454d4",
              }}
            >
              <img src={Headphones} width="100%" height="100%" />
            </Box>
            <Stack spacing={{ sm: 3, xs: 1 }} paddingTop="30px">
              <Typography
                sx={{
                  fontSize: "3.375rem",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: "1.17",
                  letterSpacing: "-1.69px",
                  marginRight: "0.875rem",
                }}
              >
                Enjoy every single <br /> beat on headphone!
              </Typography>
              <Typography
                sx={{
                  width: "28.125rem",
                  height: "4.375rem",
                  fontSize: "1,181rem",

                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "1.86",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                For iPhone, iPad, and Android users, be sure your product's
                firmware is up to date through the Bose connect app.
              </Typography>
              <Box
                backgroundColor="#6565e9"
                width="18.125rem"
                height="7.375rem"
                borderRadius="9px"
              >
                <Box
                  sx={{
                    padding: "15px",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    alignContent="center"
                  >
                    <Typography
                      variant="h1"
                      fontSize="3.375rem"
                      fontWeight="bold"
                      color="white"
                    >
                      $299
                    </Typography>
                    <Box
                      backgroundColor="#77bf41"
                      color="white"
                      borderRadius="4.5px"
                      sx={{
                        p: "5px 10px",
                        height: "max-content",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                        }}
                      >
                        Save 30% today
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "1.181rem",
                    }}
                  >
                    Original Price $399
                  </Typography>
                </Box>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    width: "80px",
                    height: "3.375rem",
                    borderRadius: "4.5px",
                    backgroundColor: "#f7f7fb",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems={"center"}
                      alignContent="center"
                      sx={{
                        height: "100%",
                        width: "30%",
                        p: 2,
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "#000",
                        }}
                      >
                        1
                      </Typography>
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="space-between"
                      sx={{
                        width: "30%",
                        height: "3.375rem",
                      }}
                    >
                      <Box
                        sx={{
                          background: "#eae9f2",
                          height: "47%",
                          width: "100%",
                          borderRadius: "0px 4.5px 0px 0px",
                        }}
                      >
                        <Stack
                          direction="column"
                          justifyContent="center"
                          sx={{
                            height: "100%",
                          }}
                        >
                          <Typography
                            align="center"
                            sx={{
                              color: "#000",
                            }}
                          >
                            +
                          </Typography>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          background: "#eae9f2",
                          height: "47%",
                          width: "100%",
                          borderRadius: "0px 0px 4.5px 0px",
                        }}
                      >
                        <Stack
                          direction="column"
                          justifyContent="center"
                          sx={{
                            height: "100%",
                          }}
                        >
                          <Typography
                            align="center"
                            sx={{
                              color: "#000",
                            }}
                          >
                            -
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Button
                  sx={{
                    backgroundColor: "#fedc5a",
                    width: "11.25rem",
                    height: "3.375rem",
                    color: "black",

                    fontWeight: "bold",
                  }}
                >
                  Add to cart
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Index;
