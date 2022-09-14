import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Index = ({ onClose, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let existingReviews;
    let updatedReviews;
    existingReviews = JSON.parse(localStorage.getItem("reviews"));
    const data = {
      title: title,
      rating: rating,
      description: description,
    };
    if (existingReviews) {
      data["id"] = existingReviews.length + 1;
      updatedReviews = [...existingReviews, data];
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    } else {
      data["id"] = 1;
      localStorage.setItem("reviews", JSON.stringify([data]));
    }
    resetData();
    onClose();
    onUpdate();
  };

  const resetData = () => {
    setTitle("");
    setRating(0);
    setDescription("");
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("Required"),
      companyName: Yup.string()
        .min(5, "Should be 5 character long")
        .max(15, "should not exceed 15 characters")
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .matches(/^\S+$/, "The password cannot include space"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <Stack
        direction="column"
        spacing={3}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Stack spacing={1}>
          <Typography
            align="center"
            sx={{
              fontSize: "3.75rem",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: "1.313rem",
            }}
          >
            No Credit Card Required
          </Typography>
        </Stack>
        <TextField
          name="email"
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="companyName"
          fullWidth
          id="outlined-basic"
          label="Company name"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.companyName}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
        <TextField
          name="password"
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Stack direction="row" alignItems={"center"}>
          <Checkbox {...label} />
          <Typography>
            I agree to the{" "}
            <span style={{ color: "blue" }}>Terms & Conditions</span>
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          sx={{
            border: "solid 1px #c31a12",
            background: "#f04037",
            color: "#fff",
            height: "3.75rem",
            fontWeight: "bold",
            fontSize: "1.313rem",
            borderRadius: "10px",
          }}
          type="submit"
        >
          Get Started
        </Button>
        <Typography align="center">
          Already have an account?{" "}
          <span
            style={{
              color: "blue",
            }}
          >
            Sign in
          </span>
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default Index;
