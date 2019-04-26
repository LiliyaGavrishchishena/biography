import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// components
import Header from './Header/Header';
import Spiner from './Spiner/Spiner';
import Footer from './Footer/Footer';
// configs
import routes from '../configs/routes';

// pages
import HomePage from '../pages/HomePage';

// styles
import styles from './App.module.css';

const AsyncNewsPage = lazy(() =>
  import('../pages/AsyncNewsPage' /* webpackChunkName: "news-page" */),
);
const AsyncContactsPage = lazy(() =>
  import('../pages/AsyncContactsPage' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.document}>
        <Header className={styles.main} />
        <Suspense fallback={Spiner}>
          <Switch>
            <Route exact path={routes.MAIN} component={HomePage} />
            <Route exact path={routes.NEWS} component={AsyncNewsPage} />
            <Route exact path={routes.CONTACTS} component={AsyncContactsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default App;
