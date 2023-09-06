import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import green from "@mui/material/colors/grey";
import "./header.css";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[700]),
  backgroundColor: "rgb(165, 132, 132)",
  border: "1px solid ",
  borderBlockColor: green[50],
  width: "150px",
  margin: "15px auto 0px auto",
  height: "30px",
  "&:hover": {
    backgroundColor: "rgb(143, 98, 98)",
  },
}));

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-title">MURIPOUND RECORDS</div>
        <div className="add-project-button">
          <ColorButton variant="contained">Add Project</ColorButton>
        </div>
      </div>
    </>
  );
}
