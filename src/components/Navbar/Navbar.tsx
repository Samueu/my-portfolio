import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledToobar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem sx={{ fontFamily: "Roboto" }}>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default Navbar;
