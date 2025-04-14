 "use client"
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu , MenuItem , Button, Typography, Grid,AppBar,Toolbar,IconButton, Box  } from '@mui/material';
import Link from "next/link";
export default function AttractionsLayout({ children }) {
  const pages = ['Products', 'Pricing', 'Blog'];
    const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (
    <div >
        <AppBar position="static" 
        color="transparent"
        sx={{backgroundColor: "#80ea69" }}>
    <Toolbar sx={{position: "relative" }} >
    <IconButton edge="start" color="inherit" aria-label="menu"  
    onClick={handleClick}
  >
        <MenuIcon />
      </IconButton>
      <Menu 
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
>
<MenuItem onClick={handleClose}>โปรไฟล์</MenuItem>
<MenuItem onClick={handleClose}>ออกจากระบบ</MenuItem>
</Menu>
    <Link href={"/attractions"}>
  <Button variant="contained"  sx={{
    backgroundColor:"#a1ec91",
    color:"red",
    marginLeft:10
  }}>Manhwa</Button>
</Link>

    </Toolbar>  
  </AppBar>
  {children}
    </div>
  )
}
