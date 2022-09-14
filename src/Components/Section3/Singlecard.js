import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Index = ({ image, title, color }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-start"
      alignItems="center"
      alignContent="center"
      sx={{
        width: "19.563rem",
        height: "3.5rem",
        background: "#fff",
        borderRadius: "9px",
        border: "solid 0.9px",
        borderColor: "#eae9f2",
        px: 2,
        py: 1,
      }}
    >
      <Stack
        width="3.125rem"
        height="3.125rem"
        justifyContent="center"
        alignIntems="center"
        alignContent="center"
        sx={{
          background: color,
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <Box width="100%">
          <img src={image} width="40%" />
        </Box>
      </Stack>
      <Typography
        sx={{
          fontSize: "1.181rem",
          fontWeight: "bold",
          letterSpacing: "-0.59px",
          color: "#19191b",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "normal",
          objectFit: "contain",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default Index;
