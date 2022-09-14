import React from "react";
import SingleCard from "./Singlecard";
import Card from "../Images/cards.png";
import Smartphone from "../Images/smartphone.png";
import Yellowmobile from "../Images/yellowmobile.png";
import Redmiobile from "../Images/redmobile.png";
import Greenmobile from "../Images/greenmobile.png";
import { Stack } from "@mui/system";
import { Container, Typography, Box } from "@mui/material";
const Index = () => {
  const data = [
    {
      id: 1,
      image: Card,
      title: "50+ Unique Design Blocks",
      color: "rgba(240, 64, 55, 0.1)",
    },
    {
      id: 2,
      image: Smartphone,
      title: "Multiple Layouts",
      color: "rgba(84, 84, 212, 0.1)",
    },
    {
      id: 3,
      image: Yellowmobile,
      title: "Mobile First Design",
      color: "rgba(254, 220, 90, 0.1)",
    },
    {
      id: 4,
      image: Smartphone,
      title: "Fully Responsive",
      color: "rgba(84, 84, 212, 0.1)",
    },
    {
      id: 5,
      image: Redmiobile,
      title: "Bootstarp 4 Framework",
      color: "rgba(240, 64, 55, 0.1)",
    },
    {
      id: 6,
      image: Greenmobile,
      title: "Humanly support",
      color: "rrgba(119, 191, 65, 0.1)",
    },
    {
      id: 7,
      image: Redmiobile,
      title: "Lifetime Updates",
      color: "rgba(240, 64, 55, 0.1)",
    },
    {
      id: 8,
      image: Smartphone,
      title: "Rich Documentation",
      color: "rgba(84, 84, 212, 0.1)",
    },
  ];

  return (
    <React.Fragment>
      <Box
        sx={{
          background: "#413e65;",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Stack width="100%" spacing={8} justifyContent="center">
            <Typography
              sx={{
                fontSize: "3.375rem",
                fontWeight: "bold",
                lineHeight: "1.17",
                letterSpacing: "-1.69px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              it's everything <br />
              you'll ever need
            </Typography>
            <Stack direction="column" spacing={4}>
              <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={3}
                justifyContent={{ sm: "space-between", xs: "center" }}
                alignItems={{ xs: "center" }}
                sx={{
                  width: "100%",
                }}
              >
                {data.slice(0, 3).map((item) => (
                  <SingleCard
                    image={item.image}
                    title={item.title}
                    color={item.color}
                  />
                ))}
              </Stack>
              <Stack
                direction={{ sm: "row", xs: "column" }}
                justifyContent={"center"}
                alignItems={{ xs: "center" }}
                spacing={3}
              >
                {data.slice(3, 5).map((item) => (
                  <SingleCard
                    image={item.image}
                    title={item.title}
                    color={item.color}
                  />
                ))}
              </Stack>
              <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={3}
                justifyContent="space-between"
                alignItems={{ xs: "center" }}
                sx={{
                  width: "100%",
                }}
              >
                {data.slice(5, 8).map((item) => (
                  <SingleCard
                    image={item.image}
                    title={item.title}
                    color={item.color}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Index;
