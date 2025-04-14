import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React from "react";

const AppBarWeb = () => {
  const pages = ["Products", "Pricing", "Blog"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ backgroundColor: "#80ea69" }}
    >
      <Toolbar sx={{ position: "relative" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>โปรไฟล์</MenuItem>
          <MenuItem onClick={handleClose}>ออกจากระบบ</MenuItem>
        </Menu>
        <Link href={"/attractions"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#a1ec91",
              color: "red",
              marginLeft: 10,
            }}
          >
            Manhwa
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWeb;
