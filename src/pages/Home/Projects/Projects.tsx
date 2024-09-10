import { styled } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  return (
    <>
      <StyledProjects>
        <h1>Hello</h1>
      </StyledProjects>
    </>
  );
};

export default Projects;
