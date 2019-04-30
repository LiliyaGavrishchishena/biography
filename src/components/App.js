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

const AsyncProjectsPage = lazy(() =>
  import('../pages/AsyncProjectsPage' /* webpackChunkName: "projects-page" */),
);
const AsyncContactsPage = lazy(() =>
  import('../pages/AsyncContactsPage' /* webpackChunkName: "contacts-page" */),
);
const AsyncStudyPage = lazy(() =>
  import('../pages/AsyncStudyPage' /* webpackChunkName: "study-page" */),
);
const AsyncTasksPage = lazy(() =>
  import('../pages/AsyncTasksPage' /* webpackChunkName: "task-page" */),
);
const AsyncPersonPage = lazy(() =>
  import('../pages/AsyncPersonPage' /* webpackChunkName: "person-page" */),
);
class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.document}>
        <div className={styles.content}>
          <Header className={styles.main} />

          <Suspense fallback={Spiner}>
            <Switch>
              <Route exact path={routes.MAIN} component={HomePage} />
              <Route exact path={routes.NEWS} component={AsyncNewsPage} />
              <Route
                exact
                path={routes.PROJECT}
                component={AsyncProjectsPage}
              />
              <Route
                exact
                path={routes.CONTACTS}
                component={AsyncContactsPage}
              />
              <Route exact path={routes.TASKS} component={AsyncTasksPage} />
              <Route exact path={routes.STUDY} component={AsyncStudyPage} />
              <Route exact path={routes.PERSON} component={AsyncPersonPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default App;
