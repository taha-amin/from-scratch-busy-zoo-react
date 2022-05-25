import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ZooPage from './ZooPage';
import AdminPage from './AdminPage.js';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <ZooPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
