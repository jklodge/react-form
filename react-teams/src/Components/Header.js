import { useStateValue } from "../store";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import List from "./List";
import Drawer from "@material-ui/core/Drawer";
import SideBar from "./Sidebar";
import "./Header.scss";

const useStyles = makeStyles(({ spacing }) => ({
  "@global": {
    body: {
      margin: 0
    }
  },
  appBar: {
    alignItems: "center",
    background: "#607D8B",
    padding: spacing(1),
    marginBottom: spacing(2),
    flexDirection: "row",
    justifyContent: "left",
    height: "70px"
  },
  actions: {
    display: "flex"
  },
  add: {
    marginLeft: spacing(1)
  },
  drawerPaper: {
    width: 266
  }
}));

const Header = () => {
  const [teams] = useStateValue();
  const [open, setOpen] = useState(true);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div onClick={handleOpen} className="header">
      <AppBar position="static" className={classes.appBar}>
        <div className="circle"></div>
        <h3>{teams.chosenTeam.name}</h3>
      </AppBar>
      <List />
      <Drawer
        variant="temporary"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleOpen}
        open={open}
      >
        <SideBar open={open} />
      </Drawer>
    </div>
  );
};
export default Header;
