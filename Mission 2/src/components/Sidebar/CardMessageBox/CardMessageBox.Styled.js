import { styled } from "@mui/material/styles";
import { Badge, Box } from "@mui/material";

export const BoxMessage = styled(Box)(({ theme }) => ({
  height: "90px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  transition: "0.10s ease-in-out",

  "&:hover": {
    backgroundColor: "#58b0e033",
    borderLeft: "8px solid #58b0e0"
  },

  "&:active": {
    transition: "0.10s ease-in-out",
    backgroundColor: "#58b0e0"
  }
}));

export const BoxMessageContent = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",

  img: {
    width: "40px",
    height: "40px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))",
    marginRight: "10px"
  }
}));

export const BoxMessageUser = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"
}));

export const BoxLastMessageTime = styled(Badge)(({ theme }) => ({
  width: "20%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center"
}));

export const BadgeMessageNoRead = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-colorPrimary": {
    color: "#ffffff",
    backgroundColor: "#58B0E0",
    border: "1px solid #fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",

    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#3ea2d8"
    }
  }
}));
