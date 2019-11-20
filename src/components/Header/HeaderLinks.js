/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Info, PersonAdd, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle"
const useStyles = makeStyles(styles);

// export default function HeaderLinks(props) {
//   const classes = useStyles();
//   return (
//     <List className={classes.list}>
//       <ListItem className={classes.listItem}>
//       <Link className={classes.navLink} to='/about/' >
//         <Button
//           color="transparent"
//           target="_blank"
//           className={classes.navLink}
//           >
//           <Info className={classes.icons} />About
//         </Button>
//       </Link>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//       <Link className={classes.navLink} to='/register' >
//         <Button
//           color="transparent"
//           target="_blank"
//           className={classes.navLink}
//           >
//           <PersonAdd className={classes.icons} />Register
//         </Button>
//       </Link>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//       <Link className={classes.navLink} to='/login' >
//         <Button
//           color="transparent"
//           target="_blank"
//           className={classes.navLink}
//           >
//           <AccountCircle className={classes.icons} />Login
//         </Button>
//       </Link>
//       </ListItem>
//     </List>
//   );
// }

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Info}
          dropdownList={[
            <Link to="/about" className={classes.dropdownLink}>
              Main
            </Link>,
            <Link to="/about/about-christina" className={classes.dropdownLink}>
              About Christina
            </Link>,
            <Link to="/about/about-me" className={classes.dropdownLink}>
              About Me
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Register"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={PersonAdd}
          dropdownList={[
            <Link to="/register" className={classes.dropdownLink}>
              Register
            </Link>,
            <Link to="/register/SDRegister" className={classes.dropdownLink}>
              SD Register
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Login"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AccountCircle}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink}>
              Login
            </Link>,
            <Link to="/login/SDLogin" className={classes.dropdownLink}>
              SD Login
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}

