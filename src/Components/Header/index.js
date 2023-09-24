import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import green from "@mui/material/colors/grey";
import "./header.css";
import { useNavigate, useLocation } from "react-router-dom";

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

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAdd = () => {
      navigate('/upsert');
  }

  const handleCancel = () => {
      navigate('/');
  }

  return (
    <>
      <div className="header">
        <div className="header-title">MURIPOUND RECORDS</div>
        <div className="add-project-button">
          {
              location.pathname === '/'
                  ? <ColorButton variant="contained" onClick={handleAdd}>Add Project</ColorButton>
                  : <ColorButton variant="contained" onClick={handleCancel}>Cancel</ColorButton>
          }
        </div>
      </div>
    </>
  );
}

export default Header
