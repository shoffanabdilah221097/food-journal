import { Box } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const redirInstagram = () => {
    window.open("https://instagram.com/shoffanabdilah", "_blank");
  }
  const redirFacebook = () => {
    window.open("https://web.facebook.com/shoffanabdilah", "_blank");
  }
  const redirWhatsapp = () => {
    window.open("https://wa.me/+6281290161773", "_blank");
  }
  const redirGithub = () => {
    window.open("https://github.com/shoffanabdilah221097", "_blank");
  }

  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}>
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "35px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon onClick={redirInstagram} />
          <FacebookIcon onClick={redirFacebook} />
          <WhatsAppIcon onClick={redirWhatsapp}/>
          <GitHubIcon onClick={redirGithub}/>
        </Box>
        <h6
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          © 2023 Copyright: Shoffan Abdilah
        </h6>
      </Box>
    </>
  );
};

export default Footer;
