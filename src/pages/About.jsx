import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function About() {
  return (
    <>
      <Navigation></Navigation>
      <Box 
      sx={{
        my: 15,
        textAlign:'center',
        p:2,
        "& h4" : {
          fontWeight:'bold',
          my: 2,
          fontSize: '2rem',
        },
        "& p" : {
          textAlign: 'justify',
        },
        "@media (max-width: 600px)": {
          mt: 0,
          "& h4" : {
            fontSize: '1.5rem',
          }
        }
      }}>
        <h4>Welcome To My Pearl</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis esse aut asperiores reprehenderit, enim suscipit natus! Dolore consequuntur voluptatibus nostrum maxime distinctio illum deserunt quae magnam suscipit aut eum
          laudantium soluta ea molestias doloremque eligendi numquam explicabo placeat ad blanditiis veritatis, obcaecati dolorum omnis. Aliquid praesentium enim eius quia, pariatur minima esse id ipsa aut corrupti neque autem officiis
          vero, quam molestiae? Deleniti, odio ipsa quod blanditiis quas nemo? Id, eos architecto? Perspiciatis, reprehenderit. Consequuntur fuga quo qui quidem reiciendis ratione quia voluptatibus. Soluta ipsam perspiciatis obcaecati illum
          nulla doloremque voluptas necessitatibus fugiat quaerat ut? Minus veritatis dolorem pariatur.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, animi. Saepe aliquid quam dignissimos cumque nesciunt earum ratione. Adipisci, sapiente iste at necessitatibus saepe similique reiciendis cumque in labore itaque
          et tempora accusantium laudantium mollitia ipsa vitae ab quia magnam distinctio nobis harum totam repudiandae aliquid. Tempore sapiente dolore, possimus voluptatum accusamus eius sit inventore animi? Adipisci necessitatibus magnam
          consequuntur! Eum dolore, aliquid sint veritatis temporibus corporis sequi dolor provident molestias dolorem, cupiditate quas. Suscipit earum ipsam est laborum neque inventore repellat placeat tempora vitae officia modi, cumque
          reiciendis explicabo mollitia fuga quibusdam veniam possimus, maxime iure laboriosam adipisci quae.
        </p>
      </Box>
      <Footer />
    </>
  );
}

export default About;
