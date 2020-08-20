import React, { useContext } from "react";
import "./Navbar.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../context/DataContext";

function Navbar() {
  const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  const { state } = useContext(DataContext);
  const { user } = state;
  return (
    <div className="navbar">
      <div className="avatar-container">
        <Avatar
          alt={user?.display_name}
          src={user?.images[0].url}
          className={classes.small}
        />
        <h5 className="user-name">{user?.display_name}</h5>{/* optional chaining */}
        {/* <h1>hello {user && user.display_name}</h1> */}
      </div>
    </div>
  );
}

export default Navbar;
