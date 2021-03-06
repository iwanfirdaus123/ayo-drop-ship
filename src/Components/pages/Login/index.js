import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Button, Divider } from 'antd';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Actions } from 'Store';
import { RouteMap } from 'Routes';
import { $envDisplay } from 'Config';
import { StackedInputGroup } from '../../forms';
import { LoadingPageWrapper } from '../../wrappers';
import style from './login.module.scss';
import { Login } from 'Components/pages/index';
import banner from 'Assets/images/login-banner.png';

/**
 * Login Screen
 */
const LoginScreen = ({ login, isAuthenticated, fetching }) => {
   const [username, updateUsername] = useState('');
   const [password, updatePassword] = useState('');

   const disableSubmit = !username.length || !password.length;

   function handleLogin() {
      login(username, password);
   }

   // no need to login, enter the app
   if (isAuthenticated) {
      return <Redirect to={RouteMap.APP_INDEX} />;
   }

   return (
      <LoadingPageWrapper showLoading={fetching} message={'Authenticating...'}>
        <div className={'row'}>
         <div className={'col-md-6'}>
            <img src={banner} alt="login-banner" style={{width: '37vw', height: '74vh'}} />
         </div>
         <div className={'col-md-6'}>
            <Card
               className={style.Card}
               headStyle={{ border: 'none', fontSize: 24 }}>
               <center><h2>Sign In</h2></center>
               <br/>
               <StackedInputGroup label={' '}>
                  <Input
                     value={username}
                     onChange={e => updateUsername(e.target.value)}
                     name={'username'}
                     placeholder="Nama Lengkap"
                  />
               </StackedInputGroup>
               <StackedInputGroup label={' '}>
                  <Input
                     value={password}
                     onChange={e => updatePassword(e.target.value)}
                     name={'password'}
                     type={'email'}
                     placeholder="Email"
                  />
               </StackedInputGroup>
               <div className={style.buttonWrapper}>
                  <Button type="primary" disabled={disableSubmit} block onClick={handleLogin}>
                     SIGN IN
                  </Button>
               </div>
               <br/>
               <center>
                 <Link to="#">Lupa Password</Link>
                 <Divider>Or</Divider>
                 <Link to="/register">Register</Link>
               </center>
            </Card>
         </div>
        </div>
      </LoadingPageWrapper>
   );
};

const mapStateToProps = state => {
   return { isAuthenticated: state.user.isAuthenticated, fetching: state.user.fetching };
};

const mapDispatchToProps = dispatch => {
   return {
      login: (username, password) => dispatch(Actions.login.request(username, password))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

LoginScreen.propTypes = {
   /** method to login a user */
   login: PropTypes.func,
   /** is user authenticated? */
   isAuthenticated: PropTypes.bool,
   /** is user being logged in? */
   fetching: PropTypes.bool
};
