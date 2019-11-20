/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Place, LocalBar, Settings } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle"
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Places"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Place}
          dropdownList={[
            <Link to="/places" className={classes.dropdownLink}>
              Places
            </Link>,
            <Link to="/places/SDPlaces" className={classes.dropdownLink}>
              SD Places
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Drinks"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={LocalBar}
          dropdownList={[
            <Link to="/drinks" className={classes.dropdownLink}>
              Drinks
            </Link>,
            <Link to="/drinks/SDDrinks" className={classes.dropdownLink}>
              SD Drinks
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Settings"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Settings}
          dropdownList={[
            <Link to="/settings" className={classes.dropdownLink}>
              Settings
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}
