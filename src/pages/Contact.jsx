import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <>
      <Navigation></Navigation>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            "@media (max-width: 600px)": {
              width: "300px",
            },
          },
        }}
      >
        <h4>Contact My Pearl</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, eligendi exercitationem. Quae nesciunt et vel quas tempore tenetur corrupti cupiditate amet repellendus dolorem, atque maxime, architecto porro at! Ducimus error
          in consequuntur quos molestiae reiciendis praesentium rem dolorem ad, nisi quia minima, impedit laboriosam, nulla aperiam nam enim provident fuga.
        </p>
      </Box>
      <Box
        sx={{
          m: 14,
          width: "600px",
          ml: 10,
          "@media (max-width: 600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table arial-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "gray", color: "black" }} align="center">
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red" }} /> 123-456-7890 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue" }} /> gumilang182013@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green" }} /> +6281 290 616 773
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </>
  );
}

export default Contact;
