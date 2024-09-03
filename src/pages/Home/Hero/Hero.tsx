import { Button, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledImage
                src="https://github.com/samueu.png"
                alt="foto de perfil"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography color="primary" variant="h1" textAlign={"center"}>
                Samuel Batista
              </Typography>
              <Typography color="primary" variant="h2" textAlign={"center"}>
                Bem-vindo ao meu portfólio
              </Typography>
              <Button>
                <DownloadIcon />
                Download CV
              </Button>
              <Button>
                <EmailIcon />
                Contato
              </Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
