import React, { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { About } from '../../../pages/About';
import { Home } from '../../../pages/Home';
import { CurrentUserDropdown } from '../../../features/CurrentUser/components/CurrentUserDropdown';

import styles from './App.scss';

const BillingRouter = lazy(() => import('BillingService/BillingRouter'));
const IdentityRouter = lazy(() => import('IdentityService/IdentityRouter'));

export const App: React.FC = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <div className={styles.page}>
          <div className={sidebarExpanded ? styles.sidebarExpanded : styles.sidebar}>
            <div className={styles.heading}>
              {`BP${sidebarExpanded ? ' Intranet' : ''}`}
            </div>
            <div className={styles.links}>
              <Link to="/">
                {`🏠${sidebarExpanded ? ' Home' : ''}`}
              </Link>
              <Link to="/about">
                {`🧾${sidebarExpanded ? ' About' : ''}`}
              </Link>
              <Link to="/billing">
                {`💰${sidebarExpanded ? ' Billing' : ''}`}
              </Link>
              <Link to="/identity">
                {`🆔${sidebarExpanded ? ' Identity' : ''}`}
              </Link>
            </div>
          </div>
          <div className={styles.main}>
            <nav className={styles.navbar}>
              <a className={styles.sidebarToggler} onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                {sidebarExpanded ? "⏪" : "⏩"}
              </a>
              <ul className={styles.actionItems}>
                <li><CurrentUserDropdown /></li>
                <li><a onClick={() => alert('Notifications here!')}>🔔</a></li>
                <li><a onClick={() => alert('Wassup?')}>❔</a></li>
              </ul>
            </nav>
            <div className={styles.service}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/billing" component={BillingRouter} />
                <Route path="/identity" component={IdentityRouter} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
