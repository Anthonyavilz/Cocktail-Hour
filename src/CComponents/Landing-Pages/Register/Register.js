import React from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, loginUser} from '../../../Redux/Reducers/userReducer';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import CallIcon from '@material-ui/icons/Call';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PersonIcon from '@material-ui/icons/Person';
// core components
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Footer from "../../../components/Footer/Footer";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardHeader from "../../../components/Card/CardHeader";
import CardFooter from "../../../components/Card/CardFooter";
import CustomInput from "../../../components/CustomInput/CustomInput";

import styles from "../../../assets/jss/material-kit-react/views/loginPage";

import image from '../../../srcImages/Prescriptions.jpg';
import { withStyles } from "@material-ui/styles";

// const useStyles = makeStyles(styles);

class Register extends React.Component {
  // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone_number: '',
      password: '',
      cardAnimation: 'cardHidden'
    }

  }

  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios.post('/auth/user/new', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email: this.state.email,
      phone_number: this.state.phone_number,
      password: this.state.password
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    this.props.history.push('/user-landing')
  }
  componentDidMount() {
    setTimeout(() => {
      console.log("asdf")
      this.setCardAnimation("");
    }, 700);
  }

  setCardAnimation() {
    this.setState({ cardAnimation: '' })
  }
  render() {
    const { classes } = this.props;
    const { ...rest } = this.props;
    console.log(this.state.username);
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Cocktail Hour"
          // leftLinks={<Link to='/guest-landing'>Cocktail Hour</Link>}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimation]}>
                  <form className={classes.form} onSubmit={this.handleSubmit} method='post'>
                    <CardHeader color="login" className={classes.cardHeader}>
                      <h4>Register</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or</p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name"
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "name",
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Last Name"
                        id="last"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "name",
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        labelText="Username"
                        id="username"
                        value={this.state.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "name",
                          endAdornment: (
                            <InputAdornment position="end">
                              <HowToRegIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                        onChange={this.handleInput}
                      />
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        labelText="Phone Number"
                        id="number"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <CallIcon className={classes.inputIconsColor}>
                                lock_outline
                                  </CallIcon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                                  </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <Link to='/user-landing'>
                      <Button simple color="primary" size="lg">
                        Lets Drink!
                          </Button>
                    </Link>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
      user: reduxState.userReducer.user
  }
}

export default connect(mapStateToProps, {
  registerUser,
  loginUser
})(withStyles(styles)(Register));

// export default connect(mapStateToProps, 
//   {
//       registerUser,
//       loginUser
//   })(Register)