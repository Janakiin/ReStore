import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemeChange: ()=> void;
}

export default function Header({darkMode, handleThemeChange}: Props){

    return(
    <AppBar position="static" sx={{mb: 4}}>
    <Toolbar variant="dense">
      {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" color="inherit" component="div">
        ReStore
      </Typography>
      <Switch checked={darkMode} onChange={handleThemeChange}/>
    </Toolbar>
  </AppBar>);
}
