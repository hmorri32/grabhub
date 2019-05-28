/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Instructions from './Instructions';
import UserProfile from '../UserProfile/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="HBM Grabhub" defaultTitle="HBM Grabhub">
        <meta name="description" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
