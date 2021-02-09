import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Router from './Route';
import RouteAdmin from './RouteAdmin';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';

import SignInAdmin from '../pages/SignInAdmin';
import DashboardAdmin from '../pages/DashboardAdmin';

const Routes: React.FC = () => (
  <Switch>
    <Router path="/" exact component={SignIn} />
    <RouteAdmin path="/signup" component={SignUp} isPrivate />
    <Router path="/forgot-password" component={ForgotPassword} />
    <Router path="/reset-password" component={ResetPassword} />
    <Router path="/dashboard" component={Dashboard} isPrivate />

    <RouteAdmin path="/signin/admin" component={SignInAdmin} />
    <RouteAdmin path="/admin" component={DashboardAdmin} isPrivate />
  </Switch>
);

export default Routes;
