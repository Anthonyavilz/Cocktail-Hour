// import React from 'react';
// import {Link, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {registerUser, loginUser} from '../../../Redux/Reducers/userReducer';

// class Login extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     handleInput = e => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         console.log(e.target);
//             this.props.loginUser({
//                 username: this.state.username,
//                 password: this.state.password
//             })
//     }

//     togglePassword = e => {
//         e.preventDefault();

//         this.setState(prevState => ({ showPassword: !prevState.showPassword }) )
//     }

//     render() {
//         if (this.props.userId) return <Redirect to='/user-landing' />
//         return(
//             <div>
//                 <h2>Login</h2>
//                 <Link to='/guest-landing'><button>Home</button></Link>
//                 <form onSubmit={this.handleSubmit}>
//                     <input name='username' placeholder='Username' onChange={this.handleInput} required/>
//                     <br />
//                     <input type={this.state.showPassword ? 'text' : 'password'} name='password' placeholder='Password' onChange={this.handleInput} required/>
//                     <button onClick={this.togglePassword}>Show/Hide</button> 
//                     <br />
//                     <input name='submit' type='submit' value="Submit" />
//                     <input type='reset' value='Clear' />
//                     <br />
//                     <Link to='/register'><button>Sign-Up</button></Link>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapStateToProps = reduxState => {
//     return {
//         userId: reduxState.userReducer.user.userId
//     }
// }

// export default connect(mapStateToProps,
//     {
//         registerUser,
//         loginUser
//     })(Login)

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
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

import image from '../../../srcImages/NightTime_Table.jpg';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Cocktail Hour"
        rightLinks={<HeaderLinks />}
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
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
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
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
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
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
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